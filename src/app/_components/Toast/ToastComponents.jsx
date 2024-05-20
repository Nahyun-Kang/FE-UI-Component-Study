'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import styles from './ToastComponents.module.css';
import Close from '../../../../public/cancel.svg';
import { useToastContext } from './toastProvider';

const ToasterMain = ({ children }) => {
  const { state, dispatch } = useToastContext();
  const timerRef = useRef(null);

  const resetTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      dispatch({ type: 'CLOSE' });
    }, 3000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`${styles.mainContainer} ${state === false && styles.out}`}
      onMouseEnter={() => clearTimeout(timerRef.current)}
      onMouseLeave={resetTimer}
    >
      {children}
      <button onClick={() => dispatch({ type: 'CLOSE' })}>
        <Image
          src={Close}
          alt="닫기 버튼"
          width={10}
          height={10}
          className={styles.closeButton}
        />
      </button>
    </div>
  );
};

const ToasterMessageContainer = ({ children }) => {
  return <div className={styles.messageContainer}>{children}</div>;
};

const ToasterTitle = ({ children }) => {
  return <div className={styles.toasterTitle}>{children}</div>;
};

const ToasterDescription = ({ children }) => {
  return <div className={styles.toasterDescription}>{children}</div>;
};

const UndoButton = () => {
  const { dispatch } = useToastContext();
  return (
    <div className={styles.buttonContainer}>
      <button
        className={styles.undoButton}
        onClick={() => dispatch({ type: 'CLOSE' })}
      >
        Undo
      </button>
    </div>
  );
};

const Toaster = Object.assign(ToasterMain, {
  Container: ToasterMessageContainer,
  Title: ToasterTitle,
  Description: ToasterDescription,
  Button: UndoButton,
});

export default Toaster;
