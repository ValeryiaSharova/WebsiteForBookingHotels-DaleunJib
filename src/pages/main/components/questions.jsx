/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useSelector } from 'react-redux';
import {
  getQuestions,
  getQuestionsError,
  getQuestionsLoadingStatus,
} from '../../../store/questions';
import Accordeon from '../../../sharedComponents/accordeon';

const Questions = () => {
  const faq = useSelector(getQuestions());
  const isLoading = useSelector(getQuestionsLoadingStatus());
  const error = useSelector(getQuestionsError());

  if (isLoading) {
    return (
      <section className="questions section">
        <h2>Loading...</h2>
      </section>
    );
  }

  if (error) {
    return (
      <section className="questions section">
        <h2>{error}</h2>
      </section>
    );
  }
  return (
    <section className="questions section" id="faqs">
      <h2 className="section__title-center questions__title container">
        Some common questions <br /> were often asked
      </h2>

      <div className="questions__container container grid">
        <div className="questions__group">
          {faq
            .filter((item, index) => index % 2 === 0)
            .map(item => (
              <Accordeon title={item.question} content={item.answer} key={item._id} />
            ))}
        </div>

        <div className="questions__group">
          {faq
            .filter((item, index) => index % 2 !== 0)
            .map(item => (
              <Accordeon title={item.question} content={item.answer} key={item._id} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Questions;
