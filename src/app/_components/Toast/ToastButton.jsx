'use client';
import styles from './Toast.module.css';
import ToastModal from './ToastModal';

import { useToastContext } from './toastProvider';

export default function ToastTrigger() {
  const { state, dispatch } = useToastContext();

  return (
    <>
      <div>
        <button
          className={styles.button}
          onClick={() => dispatch({ type: 'OPEN' })}
        >
          Show Toast!
        </button>
      </div>
      {state && <ToastModal />}
    </>
  );
}
