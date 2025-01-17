import { Github, GithubIcon, Linkedin } from "lucide-react";
import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-[#040405] text-white py-8 shadow-md border-t border-gray-700">
//       <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div className="bg-gray-800 p-4 rounded-lg flex items-center space-x-4">
//           <img
//             src="https://via.placeholder.com/50"
//             alt="Developer 1"
//             className="w-12 h-12 rounded-full"
//           />
//           <div>
//             <p className="text-white">Saransh</p>
//             <div className="flex space-x-2">
//               <a href="https://www.linkedin.com/in/saransh" className="text-white">
//                 LinkedIn
//               </a>
//               <a href="https://github.com/saransh" className="text-white">
//                 GitHub
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="bg-gray-800 p-4 rounded-lg flex items-center space-x-4">
//           <img
//             src="https://via.placeholder.com/50"
//             alt="Developer 2"
//             className="w-12 h-12 rounded-full"
//           />
//           <div>
//             <p className="text-white">Ritik</p>
//             <div className="flex space-x-2">
//               <a href="https://www.linkedin.com/in/ritik" className="text-white">
//                 LinkedIn
//               </a>
//               <a href="https://github.com/ritik" className="text-white">
//                 GitHub
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="container mx-auto px-4">
//         <div className="mt-6 text-gray-400 text-xs text-center">
//           <p>
//             © {new Date().getFullYear()} Saransh & Ritik. All rights reserved.
//           </p>
//           <p>
//             Designed with{" "}
//             <span className="text-red-500 text-base" role="img" aria-label="heart">
//               ♥
//             </span>{" "}
//             by Saransh & Ritik.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };
const DeveloperCard = ({ name, image, linkedin, github }) => (
  <div className="bg-black border w-[50%] p-4 rounded-lg mx-auto flex flex-col items-center space-y-4">
    <img src={image} alt={name} className="w-30 h-20" />
    <div className="text-center">
      <p className="text-white">{name}</p>
      <div className="flex flex justify-center items-end	 space-y-2">
        <a href={linkedin} className="text-white" target="_blank">
          <Linkedin className="inline mr-3" />
          
        </a>
        <a href={github} className="text-white" target="_blank" >
          <Github className="inline  " />
        </a>
      </div>
    </div>
  </div>
);
 
const Footer = () => {
  return (
    <footer className="bg-[#040405] text-white py-8 shadow-md border-t border-gray-700">
      <h1 className="text-center text-2xl mb-4">Developed by</h1>

      <div className="w-[80%] mx-auto px-4 flex flex-cols md:flex-row gap-8 justify-center">
<div className="w-[30%]">

        <DeveloperCard
          name="Ritik Gupta"
          image="https://media.licdn.com/dms/image/v2/D4D03AQGOWMA-4a0x1g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1675701785668?e=1742428800&v=beta&t=PDuu-BX8pPYrbnNgSX_Jf57FAk383oO87fis-UA1Vlc"
          linkedin="https://www.linkedin.com/in/ritik-gupta-948815253/"
          github="https://github.com/ritik-gupta-2022"
          />
          </div>
          <div className="w-[30%]">

        <DeveloperCard
          name="Saransh Gupta"
          image="https://media.licdn.com/dms/image/v2/D4D03AQHcd8tfessaMg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1682950977317?e=1742428800&v=beta&t=IRIqLkYvRyQOHAKvLFbAOVkXywsnEeceTRGKfi4wyXc"
          linkedin="https://www.linkedin.com/in/saransh-gupta-5aa509250/"
          github="https://github.com/sarans-h"
          />
          </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="mt-6 text-gray-400 text-xs text-center">
          <p>
            © {new Date().getFullYear()} Saransh & Ritik. All rights reserved.
          </p>
          <p>
            Designed with{" "}
            <span className="text-red-500 text-base" role="img" aria-label="heart">
              ♥
            </span>{" "}
            by Saransh & Ritik.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
