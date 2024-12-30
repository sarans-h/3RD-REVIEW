import React, { useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import InteractiveHoverButton from "../components/ui/interactive-hover-button";
import { useDispatch, useSelector } from "react-redux";
import { clearberrors, myBusiness } from "../features/businessSlice";
import { BriefcaseBusiness, User, Plus, Building } from "lucide-react";
import { RiNumber1,RiNumber0,RiNumber2,RiNumber3,RiNumber4,RiNumber5,RiNumber6,RiNumber7,RiNumber8,RiNumber9 } from "react-icons/ri";

const possibleIcons = [Building];
function getRandomIcon() {
  return possibleIcons[Math.floor(Math.random() * possibleIcons.length)];
}

const MyBusiness = ({ setLinks, getIconColor, setActiveComponent }) => {
  const dispatch = useDispatch();
  const { berror, businesss } = useSelector((state) => state.business);
  useEffect(() => {
    dispatch(myBusiness());
    if (berror) {
      toast.error(berror);
      dispatch(clearberrors());
    }
  }, []);
  return (
    <div className="bg-black h-[100vh] w-[96vw]">
      <div className="p-4">
        <h1 className="text-2xl text-white">My Business</h1>
      </div>
      <p className="text-xl text-white p-7 ">
        Select Businness To View Added Products
      </p>
      <div className="grid grid-cols-4 gap-6 mt-10 px-16 w-full cursor-pointer">
        {businesss.map((business) => {
          const RandomIcon = getRandomIcon();
          return (
            <div
              key={business._id}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
              onClick={() => {
                const compKey = `Business_${business._id}`;
                setLinks((prevLinks) => [
                  ...prevLinks,
                  {
                    label: compKey,
                    href: "#",
                    icon: (
                      <RandomIcon
                        className={`h-5 w-5 flex-shrink-0 ${getIconColor(
                          business.name
                        )}`}
                      />
                    ),
                    component: compKey,
                    id: business._id,
                  },
                ]);
                setActiveComponent(compKey);
              }}
            >
              <h3 className="text-xl font-semibold text-white mb-2 break-words">
                {business.name}
              </h3>
              <p className="text-gray-400 break-words">
                {business.productId.length} products
              </p>
              <div className="-ml-6">
                <InteractiveHoverButton
                  className="text-green-400"
                  text="Add Products"
                />
              </div>
              {/* Show the same random icon on the card itself */}
              <RandomIcon
                className={`mt-3 h-5 w-5 flex-shrink-0 ${getIconColor(
                  business.name
                )}`}
              />
            </div>
          );
        })}
      </div>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            background: "black",
            color: "white",
            border: "1px solid white",
          },
        }}
      />
    </div>
  );
};

export default MyBusiness;
