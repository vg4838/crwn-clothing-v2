import { useState } from 'react';
import {
  FAQContainer,
  FAQTitle,
  FAQItem,
  FAQQuestion,
  FAQAnswer,
  ToggleIcon
} from './faq.styles';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for all unworn items with original tags. Items must be in original condition and packaging. Return shipping costs are covered by the customer unless the item was defective or incorrect."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-7 business days within the US. Express shipping (1-3 business days) and overnight shipping options are also available. International shipping times vary by location, typically 7-14 business days."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to most countries worldwide. International shipping costs and delivery times vary by destination. Customers are responsible for any customs duties or taxes that may apply."
    },
    {
      question: "How do I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on our website or the carrier's website. You'll also receive updates on your order status."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, Google Pay, and Shop Pay. All payments are processed securely through Stripe."
    },
    {
      question: "How do I know what size to order?",
      answer: "Please refer to our Size Guide page for detailed measurements and sizing information. Each product page also includes specific sizing details. If you're between sizes, we generally recommend sizing up."
    },
    {
      question: "Can I cancel or modify my order?",
      answer: "Orders can be cancelled or modified within 1 hour of placement. After that, orders are processed and shipped quickly, so changes may not be possible. Please contact us immediately if you need to make changes."
    },
    {
      question: "Do you offer student discounts?",
      answer: "Yes! We offer a 10% student discount. Verify your student status through our verification partner to receive your discount code. The discount applies to regular-priced items only."
    },
    {
      question: "How do I care for my CRWN Clothing items?",
      answer: "Care instructions are included on the label of each item. Generally, we recommend washing in cold water, turning items inside out, and air drying when possible to maintain quality and color."
    },
    {
      question: "Do you restock sold-out items?",
      answer: "We regularly restock popular items, but availability depends on seasonal collections and demand. Sign up for restock notifications on product pages, or follow us on social media for updates on new arrivals."
    }
  ];

  return (
    <FAQContainer>
      <FAQTitle>Frequently Asked Questions</FAQTitle>
      
      {faqData.map((item, index) => (
        <FAQItem key={index}>
          <FAQQuestion 
            onClick={() => toggleItem(index)}
            $isOpen={openItems.includes(index)}
          >
            {item.question}
            <ToggleIcon $isOpen={openItems.includes(index)}>
              {openItems.includes(index) ? '−' : '+'}
            </ToggleIcon>
          </FAQQuestion>
          <FAQAnswer $isOpen={openItems.includes(index)}>
            {item.answer}
          </FAQAnswer>
        </FAQItem>
      ))}
    </FAQContainer>
  );
};

export default FAQ;
