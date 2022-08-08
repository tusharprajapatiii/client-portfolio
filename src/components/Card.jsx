// import React from "react";
// import people from "../data.js";
// import { useEffect, useState } from "react";
// import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";

// function Card() {
//   const [index, setIndex] = useState(0);
//   const { name, image } = people[index];

//   useEffect(() => {
//     let slider = setInterval(() => {
//       setIndex(index + 1);
//     }, 2000);
//     return () => {
//       clearInterval(slider);
//     };
//   }, [index]);
//   //   useEffect(() => {
//   //     const lastIndex = people.length - 1;
//   //     if (index < 0) {
//   //       setIndex(lastIndex);
//   //     }
//   //     if (index > lastIndex) {
//   //       setIndex(0);
//   //     }
//   //   }, [index, people]);

//   //   const checkNumber = (number) => {
//   //     if (number > people.length - 1) {
//   //       return 0;
//   //     }
//   //     if (number < 0) {
//   //       return people.length - 1;
//   //     }
//   //     return number;
//   //   };
//   const nextPerson = () => {
//     setIndex((index) => {
//       let newIndex = index + 1;
//       return checkNumber(newIndex);
//     });
//   };
//   const prevPerson = () => {
//     setIndex((index) => {
//       let newIndex = index - 1;
//       return checkNumber(newIndex);
//     });
//   };
//   return (
//     <div>
//       <article className="w-1/2 scroll-area md:w-1/3 xl:w-[22%] xl:h-36 shadow-2xl z-10 bg-slate-100  transition-all delay-300 ease-linear top-2 border-2 h-32 mx-auto xl:-top-32 md:-top-20 relative">
//         <AiFillLeftCircle
//           onClick={prevPerson}
//           className="absolute top-1/2 -left-2"
//         />
//         <img className="absolute left-4 -top-4 h-14 w-14" src={image} />
//         <div className="relative left-20 text-sm">{name}</div>
//         <div className="text-[8px] relative top-6">{name}</div>
//         <AiFillRightCircle
//           onClick={nextPerson}
//           className="absolute top-1/2 -right-2"
//         />
//       </article>
//     </div>
//   );
// }

// export default Card;
