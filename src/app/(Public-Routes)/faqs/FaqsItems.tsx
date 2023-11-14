interface FAQItem {
  question: string
  answer: string
}

export const faqData: FAQItem[] = [
  {
    question: "What is BitCommerce?",
    answer:
      " BitSaac is an innovative tech agency and community of tech creatives. We offer web and mobile app development, UI/UX design, and more.",
  },
  {
    question: "How can i get started with BitSaac for my project?",
    answer:
      " Getting started is easy! Simply reach out to us through our contact form or email, and our team will promptly get in touch to discuss your requirements and guide you through the process.",
  },
  {
    question:
      "What technologies and tools does BitSaac use for development and design?",
    answer:
      "We stay up-to-date with the latest technologies and tools to deliver cutting-edge solutions. Our team is proficient in industry-standard software and frameworks, ensuring top-notch results.",
  },
  {
    question: "Do you offer ongoing support after the project is completed?",
    answer:
      "  Yes, we provide post-launch support and maintenance to ensure your product operates smoothly and efficiently. We offer various support packages tailored to your specific needs.",
  },
  {
    question:
      "Is BitSaac a global company, or do you operate in specific regions?",
    answer:
      "BitSaac is a global company, providing services to clients worldwide. We operate remotely, allowing us to cater to diverse audiences across different regions.",
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
