interface FAQItem {
  question: string
  answer: string
}

export const faqData: FAQItem[] = [
  {
    question: "What is BitCommerce?",
    answer:
      "Thumbs NFT Collection is a unique collection of 5,054 NFTs, each featuring 10 different types of thumbs, each with distinct personalities and behaviors, creating a fun and engaging experience.",
  },
  {
    question: "Can I sell services?",
    answer:
      "Our mission is to provide a fun NFT experience while addressing Web3 challenges like scalability, interoperability, and sustainability.",
  },
  {
    question: "What is BitSaac?",
    answer:
      "Our roadmap includes launching on Polygon, rewards and staking, play-to-earn games, and a vocational platform for holders.",
  },
  {
    question: "What are the benefits?",
    answer:
      "You can stake them for rewards, play games, enter raffles, and participate in upcoming play-to-earn games.",
  },
  {
    question: "How do I get started?",
    answer:
      "Follow us on social media and subscribe to our channels for regular updates. Join us in shaping the NFT and Web3 future! 🚀💎.",
  },
]

//  <div>
//         <h2>Still have Questions?</h2>
//         <p className="mt-[16px] mb-[24px]">
//           Contact our support team for assistance
//         </p>
//         <button className="rounded-lg px-[24px] py-[12px] border border-[#4D61F4] text-[#4D61F4]">
//           Ask us here
//         </button>
//       </div>

// "use client"
// import React, { useState } from "react"
// import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri"
// import { faqData } from "./FaqsItems"

// const Section9: React.FC = () => {
//   const [activeIndex, setActiveIndex] = useState<number | null>(0)

//   const toggleAnswer = (index: number) => {
//     if (index === activeIndex) {
//       setActiveIndex(null)
//     } else {
//       setActiveIndex(index)
//     }
//   }

//   return (
//     <div className="py-[112px] px-[64px] flex flex-col gap-[80px]">
//       <span className="flex flex-col items-start font-Roboto gap-[24px]">
//         <h2>Frequently Asked Questions</h2>
//         <h3>Find answers to common questions about BitSaac and BitCommerce.</h3>
//       </span>
//       <div className="w-full flex flex-col ">
//         {faqData.map((item, index) => (
//           <li
//             key={index}
//             className={`flex flex-col  ${activeIndex === index ? " " : " "}`}
//           >
//             <button
//               className="w-full flex items-center justify-between py-2 border-t border-black relative  "
//               onClick={() => toggleAnswer(index)}
//             >
//               <h3 className="font-Roboto font-bold">{item.question}</h3>
//               {activeIndex === index ? (
//                 <RiArrowDropUpLine size={32} />
//               ) : (
//                 <RiArrowDropDownLine size={32} />
//               )}
//               {index === faqData.length - 1 && (
//                 <div className="border-b border-black absolute bottom-0 left-0 right-0" />
//               )}
//             </button>
//             {activeIndex === index && (
//               <p className="mb-[18px]">{item.answer}</p>
//             )}
//           </li>
//         ))}
//       </div>
//       <div>
//         <h2>Still have Questions?</h2>
//         <p className="mt-[16px] mb-[24px]">
//           Contact our support team for assistance
//         </p>
//         <button className="rounded-lg px-[24px] py-[12px] border border-[#4D61F4] text-[#4D61F4]">
//           Ask us here
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Section9
