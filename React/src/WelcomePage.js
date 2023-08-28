import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import './wc.css'

const WelcomePage = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [countingFinished, setCountingFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="welcome-page">
      <div className="welcome-container">
        {showWelcome && (
          <div className="welcome-message">
            {/* <h1>안녕하세요!</h1> */}
                <div>
                    <CountUp end={940} redraw={true}>
                    {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                        </VisibilitySensor>
                    )}
                    </CountUp>
                    {countingFinished && <p>이용 가능한 공공화장실 개수</p>}
                </div>
          </div>
        )}
      </div>

      {!showWelcome && (
        <div className="main-content">
          {/* ... 메인 페이지 내용 ... */}
          <h1>이건 메인 페이지</h1>
        </div>
      )}
    </div>
  );
};

export default WelcomePage;
