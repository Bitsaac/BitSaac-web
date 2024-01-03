/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogContent = ({ title, image }: { title?: string; image?: string }) => {
  return (
    <div className="w-full  flex flex-col md:flex-row items-start justify-between mt-10 lg:mt-20 gap-20">
      <div className=" md:flex flex-col gap-y-5 w-full md:w-[40%] md:sticky top-4">
        <h3 className="font-bold text-2xl ">Contents</h3>
        <div className="flex flex-col gap-y-5 md:[&>*:nth-child(2)]:ml-4 md:[&>*:nth-child(3)]:ml-7 md:[&>*:nth-child(4)]:ml-10 md:[&>*:nth-child(5)]:ml-12 md:[&>*:nth-child(1)]:font-bold [&>*:nth-child(1)]:bg-[#F4F4F4] [&>*]:py-2 max-md:pb-10">
          <Link href="#rise-of-ai">The Rise of AI and Chatbots</Link>
          <Link href="#voice-commerce">
            Voice Commerce and Smart Assistants
          </Link>
          <Link href="#augmented-reality">
            Augmented Reality (AR) Shopping Experiences
          </Link>
          <Link href="#personalization">
            Personalization and Data-Driven Marketing
          </Link>
          <Link href="#sustainability">
            Sustainability and Ethical Shopping
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-y-4 md:gap-y-8 items-start w-full md:w-[70%] max-md:[&>*]:pb-12">
        <div className="flex flex-col gap-y-5">
          <h1 className="text-xl sm:text-2xl lg:text-3xl">{title}</h1>
          <p>
            The world of e-commerce is ever-evolving, driven by technological
            advancements, shifting consumer behaviors, and the continuous quest
            for convenience and efficiency. As we look ahead, several trends and
            predictions are shaping the future of e-commerce. In this blog post,
            we'll explore some of the key developments that are expected to
            define the e-commerce landscape in the coming years.
          </p>
        </div>

        <div className="flex flex-col gap-y-5">
          <h2 id="rise-of-ai" className="text-lg sm:text-xl lg:text-2xl">
            The Rise of AI and Chatbots
          </h2>
          <p>
            E-commerce businesses are increasingly turning to artificial
            intelligence (AI) and chatbots to enhance customer experiences.
            These technologies provide real-time customer support, personalized
            product recommendations, and streamlined shopping processes. As AI
            continues to evolve, we can expect more advanced chatbots that
            understand and respond to customer inquiries in a more human-like
            manner.
          </p>
        </div>

        <div className="flex flex-col gap-y-5">
          <h2 id="voice-commerce" className="text-lg sm:text-xl lg:text-2xl">
            Voice Commerce and Smart Assistants
          </h2>
          <p>
            Voice-activated smart assistants like Amazon's Alexa and Google
            Assistant are transforming the way consumers shop. Voice commerce is
            on the rise, with more people using voice commands to make
            purchases. As the technology becomes more integrated with e-commerce
            platforms, voice-activated shopping is expected to become a
            significant trend in the industry.
          </p>
        </div>
        <div className="w-full flex flex-col">
          <Image src={image ?? ""} alt="image" width={1000} height={700} />
          <strong className="border-l-2 border-gray-800 pl-2 mt-2 text-sm text-gray-700">
            AI Generated
          </strong>
        </div>

        <div id="augmented-reality" className="flex flex-col gap-y-5">
          <h2 className="text-lg sm:text-xl lg:text-2xl">
            Augmented Reality (AR) Shopping Experiences
          </h2>
          <p>
            AR is changing the way consumers interact with products online.
            E-commerce companies are implementing AR features that allow
            customers to visualize products in their real-world environments
            before making a purchase. From trying on virtual clothes to seeing
            how furniture fits in their homes, AR enhances the shopping
            experience and reduces return rates.
          </p>
        </div>

        <div className="flex flex-col gap-y-5">
          <h2 id="personalization" className="text-lg sm:text-xl lg:text-2xl">
            Personalization and Data-Driven Marketing
          </h2>
          <p>
            Personalization remains a key focus for e-commerce businesses. Using
            customer data, AI algorithms, and machine learning, companies can
            tailor product recommendations, marketing messages, and shopping
            experiences to individual preferences. The power of data-driven
            marketing is expected to intensify as businesses strive to provide
            customers with highly personalized content and offers.
          </p>
        </div>

        <div className="flex flex-col gap-y-5">
          <h2 id="sustainability" className="text-lg sm:text-xl lg:text-2xl">
            Sustainability and Ethical Shopping
          </h2>
          <p>
            Consumers are becoming increasingly environmentally conscious.
            E-commerce companies are responding by prioritizing sustainability
            in their operations. From eco-friendly packaging to supporting
            ethical sourcing, e-commerce businesses that embrace sustainability
            and social responsibility are likely to gain a competitive edge.
          </p>
        </div>

        <div className="w-full flex flex-col">
          <Image src={image ?? ""} alt="image" width={1000} height={700} />
          <span className="font-medium border-l-2 border-gray-800 pl-2 mt-2 text-sm text-gray-700">
            A visual representation of a chatbot assisting a customer in an
            online store.
          </span>
        </div>

        <div className="flex flex-col gap-y-5">
          <h2 className="text-lg sm:text-xl lg:text-2xl">In conclusion</h2>
          <p>
            Incorporating AI, voice commerce, AR, personalization, and
            sustainability in their strategies, e-commerce businesses are
            preparing for a dynamic future.
          </p>

          <div className="flex flex-col gap-y-5 [&>*]:italic">
            <span className="font-medium border-l-2 border-gray-800 pl-2 mt-2 text-sm text-gray-700">
              Voice commerce is on the rise, with more people using voice
              commands to make purchases.
            </span>
            <span className="font-medium border-l-2 border-gray-800 pl-2 mt-2 text-sm text-gray-700">
              Augmented Reality (AR) is changing the way consumers interact with
              products online.
            </span>
            <span className="font-medium border-l-2 border-gray-800 pl-2 mt-2 text-sm text-gray-700">
              Sustainability in e-commerce operations is a growing concern, with
              businesses prioritizing eco-friendly practices.
            </span>
          </div>

          <div className="flex flex-col gap-y-5">
            <p>
              As e-commerce continues to evolve, businesses that adapt to these
              trends and emerging technologies will be better positioned to meet
              the ever-changing needs and preferences of their customers. The
              future of e-commerce promises exciting possibilities and
              innovations that will redefine the online shopping experience.
            </p>
            <p>
              Whether you're a small business owner or part of a large
              e-commerce enterprise, understanding and embracing these trends
              can help you stay ahead of the curve and remain competitive in the
              dynamic world of online retail.
            </p>
            <p>
              Incorporating AI, voice commerce, AR, personalization, and
              sustainability in their strategies, e-commerce businesses are
              preparing for a dynamic future.
            </p>
            <p>
              Stay tuned for more updates on the future of e-commerce. We'll
              continue to explore emerging trends and predictions as the
              industry continues to evolve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
