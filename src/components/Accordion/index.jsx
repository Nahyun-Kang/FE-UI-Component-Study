import Image from 'next/image';
import { useState, createContext, useContext } from 'react';
import classNames from 'classnames/bind';

import styles from './Accordion.module.scss';
import { MOCK_DATA } from './mock';
import Chevron from '../../../public/chevron_down.svg';

function Accordion() {
  const [itemId, setItemId] = useState(null);

  const handleButtonClick = (number) => {
    if (itemId === number) {
      setItemId(null);
    } else {
      setItemId(number);
    }
  };

  return (
    <>
      <ul>
        {MOCK_DATA.map((el, idx) => {
          return (
            <li key={idx.toString()}>
              <AccordionLabel
                label={el}
                activeItemId={itemId}
                number={idx}
                onClick={handleButtonClick}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}

function AccordionLabel({ label, number, activeItemId, onClick }) {
  const cx = classNames.bind(styles);
  let isExpanded = number === activeItemId;

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
