import React from 'react';
import './settings.css';

const TutorialSettings = () => {

    function navigateToSection(local:string) {
        switch (local) {
          case 'faq': {
            const faqElement = document.querySelector("#root > section > header > div.secondary-color.holdMenu > ul > li:nth-child(4)");
            if (faqElement) {
              (faqElement as HTMLElement).click();
            }
            break;
          }
          case 'features': {
            const featureElement = document.querySelector("#root > section > header > div.secondary-color.holdMenu > ul > li:nth-child(5)");
            if (featureElement) {
              (featureElement as HTMLElement).click();
            }
            break;
          }
          case 'donate': {
            const donateElement = document.querySelector("#root > section > header > div.secondary-color.holdMenu > ul > li:nth-child(6)");
            if (donateElement) {
              (donateElement as HTMLElement).click();
            }
            break;
          }
          default:
            console.log('err');
            break;
        }
      }

  return (
    <div>
      <div className="title">
        <h2>Welcome to the Mannco.Store Enhancer!</h2>
      </div>
      <h1>Quick FAQs about the extenion</h1>

      <h2>What Does the Extension Add?</h2>
      <p>  Check the <a href='' onClick={() => navigateToSection('features')}>Features tab</a> to see everything this extension adds</p>

      <h2>How to Configure?</h2>
      <p>
        By clicking on the menus below the tutorial, you will find the
        configuration options for each page of Mannco.store. Simply modify them
        as desired.
      </p>

      <h2>How to Donate?</h2>
      <p>
        By clicking on the <a href='' onClick={() => navigateToSection('donate')}>donations tab</a>, you will find ways to support the
        project. However, everything is completely free, and there are no
        paywalls. This is a personal pet project of mine.
      </p>

      <h2>More Questions?</h2>
      <p>
        Check the <a href='' onClick={() => navigateToSection('faq')}>FAQs tab</a> to see if your question is already answered. If it's
        not, you are free to contact me!
      </p>
    </div>
  );
};

export default TutorialSettings;
