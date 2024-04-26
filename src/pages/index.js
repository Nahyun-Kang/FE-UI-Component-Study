import styles from './Home.module.scss';
import Accordion from '@/components/Accordion';

export default function Home() {
  return (
    <div className={styles.container}>
      <Accordion />
    </div>
  );
}
