import React from 'react';
import Question from './question';

const Questions = () => {
  const faq = [
    {
      question: 'My flowers are falling off or dying?',
      answer:
        ' Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant.',
    },
    {
      question: 'What causes leaves to become pale?',
      answer:
        'Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant.',
    },
    {
      question: 'What causes brown crispy leaves?',
      answer:
        'Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant.',
    },
    {
      question: 'How do i choose a plant?',
      answer:
        'Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant.',
    },
    {
      question: 'How do I change the pots?',
      answer:
        'Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant.',
    },
    {
      question: 'Why are gnats flying around my plant?',
      answer:
        'Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant.',
    },
  ];

  return (
    <section className="questions section" id="faqs">
      <h2 className="section__title-center questions__title container">
        Some common questions <br /> were often asked
      </h2>

      <div className="questions__container container grid">
        <div className="questions__group">
          {faq
            .filter((item, index) => index % 2 === 0)
            .map((item, index) => (
              <Question item={item} index={index} key={`${item + index}`} />
            ))}
        </div>

        <div className="questions__group">
          {faq
            .filter((item, index) => index % 2 !== 0)
            .map((item, index) => (
              <Question item={item} index={index} key={`${item + index}`} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Questions;
