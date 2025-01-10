import { motion } from "motion/react";
import React from "react";
import { FcFaq } from "react-icons/fc";
import SectionTitle from "./SectionTitle";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Impact Makers?",
      answer:
        "Impact Makers is a platform where individuals and organizations can post volunteer opportunities and connect with people who are eager to make a difference in their community.",
    },
    {
      question: "How can I sign up as a volunteer?",
      answer:
        "You can register as a volunteer by clicking the 'Register' button at the top-right corner of the website. Once registered, you can browse volunteer opportunities and sign up for the ones that interest you.",
    },
    {
      question: "How do I create a volunteer need post?",
      answer:
        "After logging in, go to the 'My Profile' section and click on 'Create Post.' Fill in the required details about the opportunity, and it will be listed for others to see.",
    },
    {
      question: "Can I track the volunteers for my posts?",
      answer:
        "Yes, as an organization or individual who creates a post, you can view and manage the list of volunteers who have signed up for your opportunity.",
    },
    {
      question: "Is there a blog section on Impact Makers?",
      answer:
        "Yes! We have a dedicated blog section where you can read about inspiring volunteer stories, community success, and tips for making the most out of your volunteering journey.",
    },
  ];

  return (
    <>
      <SectionTitle title={"FAQ Hub"} icon={<FcFaq />} />
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
          bounceDamping: 1,
          delay: 0.2,
        }}
        className="py-4 bg-base-200 rounded-md my-6"
      >
        {faqs.map((faq, i) => {
          return (
            <div
              key={i}
              className="collapse rounded-none collapse-arrow bg-base-200"
            >
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-sm sm:text-xl font-medium">
                {faq.question}
              </div>
              <div className="collapse-content text-xs sm:text-base opacity-80">
                <p>{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </motion.div>
    </>
  );
};

export default FAQ;
