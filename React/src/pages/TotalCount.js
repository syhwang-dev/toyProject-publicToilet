import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import styled from 'styled-components';

const CountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* 투명한 검정색 */
  position: relative;
  z-index: 1;
`;

const TotalCount = ({ onCountingFinish }) => {
  const [countingFinished, setCountingFinished] = useState(false);

  useEffect(() => {
    // 카운팅이 끝나는 로직
    setTimeout(() => {
      setCountingFinished(true);
      onCountingFinish();
    }, 3000); // 예: 3초 후 카운팅 완료
  }, [onCountingFinish]);

  return (
    <CountContainer>
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
    </CountContainer>
  );
};

export default TotalCount;
