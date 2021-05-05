import React, { Component } from 'react';
import LearnContext from '../../context/LearnContext';

class NextWordPage extends Component {
  static contextType = LearnContext;
  render() {
    let {
      nextWord,
      totalScore,
      userResponse,
      wordCorrectCount,
      wordIncorrectCount,
      handleSubmitAnswer,
      handleChange,
    } = this.props;

    // let { previousWord = '', nextWord = '', totalScore = 0 } = this.context;

    return (
      <div className='next__word__page'>
        <h2 className='next__word__header'>Here is a Latin phrase:</h2>
        <span className='next__word__value'>{nextWord}</span>
        <form className='quiz__form' onSubmit={handleSubmitAnswer}>
          <label
            htmlFor='learn-guess-input'
            className='learn__guess__input__label'
          >
            What is the English translation for this phrase?
          </label>
          <input
            name='guess'
            id='learn-guess-input'
            className='learn-guess-input'
            type='text'
            placeholder='Translation'
            value={userResponse}
            onChange={handleChange}
            required
          />
          <br />
          <button type='submit' className='submit__answer'>
            Submit your answer
          </button>
        </form>
        <div className='stat__track'>
          <div className='DisplayScore'>
            <p className='word__stats'>
              Total Score<span className='stat__target'>{totalScore}</span>
            </p>
          </div>
          <p className='word__stats'>
            Correct
            <span className='stat__target'>{wordCorrectCount}</span>
          </p>
          <p className='word__stats'>
            Incorrect
            <span className='stat__target'>{wordIncorrectCount}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default NextWordPage;
