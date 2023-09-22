import React from 'react';
import Style from './Header.module.css';

const Chekoutstep = ({ currentStep }) => {
  return (
    <div className={Style.stepper_wrapper}>
      <div
        className={`${Style.stepper} ${currentStep > 1 ? Style.completed : ''}`}
      >
        <div
          className={`${Style.stepper_item} ${
            currentStep >= 1 ? Style.completed : ''
          }`}
        >
          <div className={Style.step_counter}>1</div>
        </div>

        <div className={Style.step_bar_B}></div>
      </div>
      <div
        className={`${Style.stepper} ${currentStep > 2 ? Style.completed : ''}`}
      >
        <div
          className={`${Style.stepper_item} ${
            currentStep >= 2 ? Style.completed : ''
          }`}
        >
          {currentStep >= 2 && <div className={Style.step_counter}>2</div>}
        </div>
        <div className={Style.step_bar_G}></div>{' '}
      </div>
      <div
        className={`${Style.stepper} ${currentStep > 3 ? Style.completed : ''}`}
      >
        <div
          className={`${Style.stepper_item} ${
            currentStep >= 3 ? Style.completed : ''
          }`}
        >
          {currentStep >= 3 && <div className={Style.step_counter}>3</div>}
        </div>
        <div className={Style.step_bar_B}></div>
      </div>
      <div
        className={`${Style.stepper} ${currentStep > 4 ? Style.completed : ''}`}
      >
        <div
          className={`${Style.stepper_item} ${
            currentStep >= 4 ? Style.completed : ''
          }`}
        >
          {currentStep >= 4 && <div className={Style.step_counter}>4</div>}
        </div>
        <div className={Style.step_bar_G}></div>
      </div>
      <div
        className={`${Style.stepper} ${currentStep > 5 ? Style.completed : ''}`}
      >
        <div
          className={`${Style.stepper_item} ${
            currentStep >= 5 ? Style.completed : ''
          }`}
        >
          {currentStep >= 5 && <div className={Style.step_counter}>5</div>}
        </div>
        <div className={Style.step_bar}></div>
      </div>
    </div>
  );
};

export default Chekoutstep;
