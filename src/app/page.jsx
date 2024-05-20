// 'use client';
import dynamic from 'next/dynamic';
import styles from './Home.module.scss';
import ToastComponent from './_components/Toast';

export default function Home() {
  return (
    <div className={styles.container}>
      <ToastComponent />
    </div>
  );
}
