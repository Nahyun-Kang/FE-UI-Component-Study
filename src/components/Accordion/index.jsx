import Image from 'next/image';
import { useState, createContext, useContext } from 'react';
import classNames from 'classnames/bind';

import styles from './Accordion.module.scss';
import { MOCK_DATA } from './mock';
import Chevron from '../../../public/chevron_down.svg';

const cx = classNames.bind(styles);

const IdContext = createContext(null);

function Accordion() {
  //현재 활성화된 레이블의 ID
  const [activeItemId, setActiveItemId] = useState(null);

  //한 레이블의 셰브론 버튼을 클릭할 때, 해당 레이블의 index를 활성화된 레이블 ID로 설정하기 위한 함수
  const handleButtonClick = (number) => {
    //토글을 위한 조건
    if (activeItemId === number) {
      setActiveItemId(null);
    } else {
      setActiveItemId(number);
    }
  };

  return (
    <IdContext.Provider value={activeItemId}>
      <ul>
        {MOCK_DATA.map((el, idx) => {
          return (
            <li key={idx.toString()}>
              <AccordionLabel
                label={el}
                number={idx}
                onClick={handleButtonClick}
              />
            </li>
          );
        })}
      </ul>
    </IdContext.Provider>
  );
}

function AccordionLabel({ label, number, onClick }) {
  const activeItemId = useContext(IdContext);
  const isExpanded = number === activeItemId;

  return (
    <div className={styles.label_container}>
      <div className={styles.label_title}>
        <h2>{label.title}</h2>
        <button
          className={cx('chevron', `${isExpanded && 'up'}`)}
          onClick={() => onClick(number)}
        >
          <Image src={Chevron} width={12} height={12} alt="셰브론" />
        </button>
      </div>
      <div className={cx('label_description', `${isExpanded && 'opened'}`)}>
        <p className={cx('content')}>{label.content}</p>
      </div>
      <div className={styles.line}></div>
    </div>
  );
}

export default Accordion;
