import dotenv from "dotenv";

dotenv.config({ path: "./config/config.env" });
import Stripe from 'stripe';
import { v4 as uuidv4 } from 'uuid';
import { errorHandler } from '../utils/error.js';
import User from '../models/user.model.js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
// console.log("Stripe Secret Key:", `${process.env.FRONT_URL}`);
const plans = [
        {
          title: "Free Plan",
          price: "Free",
          active: true,
          features: [
            { name: "100 credits included", included: true },
            { name: "10 credits = 1 business", included: true },
            { name: "5 credits = 1 product", included: true },
            { name: "Limit of 100 total testimonials", included: true },
            { name: "Ad-free usage", included: false },
            { name: "Custom branding", included: false },
            { name: "Priority support", included: false },
          ],
        },
        {
          title: "Standard Top-Up",
          price: "100 ",
          active: false,
          features: [
            { name: "10% bonus credits (100 of 110)", included: true },
            { name: "9 credits = 1 business", included: true },
            { name: "4 credits = 1 product", included: true },
            { name: "Limit of 1000 total testimonials", included: true },
            { name: "Ad-free usage", included: true },
            { name: "Custom branding (Upcoming)", included: true },
            { name: "Priority support", included: true },
    
          ],
        },
        {
          title: "Premium Top-Up",
          price: "500",
          active: false,
          features: [
            { name: "20% bonus credits (500 of 600)", included: true },
            { name: "7 credits = 1 business", included: true },
            { name: "3 credits = 1 product", included: true },
            { name: "Unlimited testimonials", included: true },
            { name: "Ad-free usage", included: true },
            { name: "Custom branding (Upcoming)", included: true },
            { name: "24/7 priority support", included: true },
    
          ],
        },
      ];
export const createpayment= async (req, res, next) => {
        const {title,price}=req.body;
        const userId=req.user.id;
        const user=await User.findById(userId);
        if(!user){
                return next(errorHandler(404,"User not found"));
        }
        
        
        const plan=plans.filter(plan=>plan.title===title)[0];

        user.save();
       

        const amount=parseInt(price);
        // console.log("Amount:", price);
        const product=await stripe.products.create({
                name:plan.title,
        });
        if(product){
                var price1=await stripe.prices.create({
                        unit_amount:amount*100,
                        currency:'inr',
                        product:product.id,
                });
        }
        if(price1.id){
                var session = await stripe.checkout.sessions.create({
                                payment_method_types: ['card'],
                                line_items: [{
                                                price: price1.id,
                                                quantity: 1,
                                }],
                                mode: 'payment',
                                success_url: `${process.env.FRONT_URL}/success/?session_id={CHECKOUT_SESSION_ID}&product_name=${encodeURIComponent(plan.title)}`,
                                cancel_url: `${process.env.FRONT_URL}/cancel/?session_id={CHECKOUT_SESSION_ID}&product_name=${encodeURIComponent(plan.title)}`,
                                customer_email: req.user.email,
                });
        }

        if(session.id){
                res.status(200).json(session);
        }


    
}

export const paymentSuccess = async (req, res, next) => {
  try {
    const { sessionId,productName } = req.body;
    // Retrieve the session from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    console.log("Session:", session);
    const userId = req.user.id;
    const user = await User.findById(userId);
        if (!user) {
          return next(errorHandler(404, "User not found"));
        }
        // Update the user's plan
        if(productName==="Standard Top-Up"){
                user.credit+=110;
        }
        else if(productName==="Premium Top-Up"){
                user.credit+=600;
        }
        else{
                user.credit+=0;
        }
        user.save();


  
    // Confirm payment status
    if (session.payment_status === "paid") {
        // Update user credits
        

      return res.status(200).json({ success: true, message: "Credits updated." });
    } else {
      return res.status(400).json({ success: false, message: "Payment not successful." });
    }
  } catch (error) {
    return errorHandler(res, error);
  }
};


