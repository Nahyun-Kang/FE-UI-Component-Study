'use client';
import { useState, createContext, useContext, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './Select.module.css';

import { MOCK } from './mock';
import Chevron from '../../../../public/select_chevron.svg';
import Checked from '../../../../public/select_check.svg';

//초기값을 넣어보기
const OptionContext = createContext(null);

export default function SelectComponent() {
  const [isOpened, setIsOpened] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const ref = useRef(null);

  //버튼 클릭시 드롭다운 토글
  const handleButtonClick = () => {
    setIsOpened((state) => !state);
  };

  // 옵션 클릭시, 선택된 것 넣어주는 것
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  //외부클릭시 드롭다운 꺼지게
  const handleOutsideClick = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpened(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <OptionContext.Provider value={selectedOption}>
      <div className={styles.container} ref={ref}>
        <button className={styles.button} onClick={handleButtonClick}>
          <span className={styles.selected_option}>
            {selectedOption ? selectedOption : 'Select a Fruit'}
          </span>
          <Image src={Chevron} alt="chevron down" width={16} height={16} />
        </button>
        {isOpened && <Option onClick={handleOptionClick} />}
      </div>
    </OptionContext.Provider>
  );
}

function Option({ onClick }) {
  const OPTION_LIST = MOCK.list;
  const selectedOption = useContext(OptionContext);

  return (
    <ul className={styles.option_container}>
      <li className={styles.option}>
        <span className={styles.option_name}>{MOCK.theme}</span>
      </li>
      {OPTION_LIST.map((el, idx) => {
        return (
          <li
            key={idx.toString()}
            className={`${styles.option_item} `}
            onClick={() => onClick(el)}
          >
            {selectedOption === el && (
              <Image
                src={Checked}
                alt="check_mark"
                width={14}
                height={14}
                className={styles.check_mark}
              />
            )}
            <span className={styles.option_name}>{el}</span>
          </li>
        );
      })}
    </ul>
  );
}
