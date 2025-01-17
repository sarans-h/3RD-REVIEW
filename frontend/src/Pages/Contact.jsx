import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";
import { motion } from "framer-motion";
import { Toaster, toast } from 'react-hot-toast';

const Contact = () => {

  return (
    <div className="bg-black">
      <div className="h-auto flex flex-col lg:flex-row items-center justify-center bg-black text-white px-4">
        {/* Left Side: Highlight and Additional Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
          className="lg:w-1/2 w-full h-auto mt-20 flex flex-col space-y-6 text-center lg:text-left lg:pr-10 "
        >
          <HeroHighlight>
            <h1 className="text-3xl md:text-5xl font-bold leading-relaxed">
              Welcome,
              <span className="block pt-7">
                to{"  "}
                <Highlight className="text-black dark:text-white">
                  TESTIMONIALS
                </Highlight>
              </span>
            </h1>

            <p className="text-gray-400 text-sm lg:text-base max-w-lg mx-auto  pt-20 lg:mx-0">
              Whether you have questions, ideas to share, or just want to say
              hello, we&apos;re here to listen. Fill out the form, and
              we&apos;ll get back to you soon. Together, let&apos;s make
              something amazing.
            </p>
            <p className="text-gray-400 text-sm lg:text-base max-w-lg mx-auto lg:mx-0">
              Need immediate assistance? Reach us at{" "}
              <span className="font-bold text-white">saranshgupta6252@gmail.com</span>{" "}
              or call us at{" "}
              <span className="font-bold text-white">+91 xxxxxxxxx</span>.
            </p>
          </HeroHighlight>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
          className="lg:w-1/2 w-full bg-black p-8 rounded-md shadow-lg mt-10 lg:mt-0"
        >
          <h2 className="font-bold text-3xl mb-4 text-center lg:text-left inline-block">
            Contact Us
          </h2>
          <form  className="space-y-6">
            <div className="flex flex-wrap gap-6">
              {/* Name */}
              <div className="flex-1">
                <Label htmlFor="name" className="text-gray-300">
                  Your Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  type="text"
                  required
           
                  className="bg-[#1b15156e] text-white border border-gray-600"
                />
              </div>

              {/* Email */}
              <div className="flex-1">
                <Label htmlFor="email" className="text-gray-300">
                  Your Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  type="email"
                  required

                  className="bg-[#1b15156e] text-white border border-gray-600"
                 
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <Label htmlFor="message" className="text-gray-300">
                Message
              </Label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message"
                required
                
                className="w-full bg-[#1b15156e] text-white px-3 py-2 border rounded-md"
                rows="4"
              ></textarea>
            </div>

            {/* Error Message */}

            {/* Submit Button */}
            <button

              className="w-full bg-white text-black py-2 rounded-md hover:bg-gray-200 transition-colors"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
      <Toaster toastOptions={{
        className: '',
        style: {
          background: 'black',
          color: 'white',
          border: '1px solid white',
        },
      }} />
    </div>
  );
};

export default Contact;
