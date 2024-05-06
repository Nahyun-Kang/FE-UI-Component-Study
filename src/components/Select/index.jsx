import { useState, createContext, useContext, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './Select.module.css';

import { MOCK } from '@/components/Select/mock';
import Chevron from '../../../public/select_chevron.svg';
import Checked from '../../../public/select_check.svg';

const OptionContext = createContext();

export default function SelectComponent() {
  const [isOpened, setIsOpened] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const ref = useRef(null);

  const handleButtonClick = () => {
    setIsOpened((state) => !state);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

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
  const selectedItem = useContext(OptionContext);

  return (
    <ul className={styles.option_container} tabIndex={0}>
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
            {selectedItem === el && (
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
