import styles from './Home.module.scss';
import Accordion from '@/components/Accordion';
import SelectComponent from '@/components/Select';

export default function Home() {
  return (
    <div className={styles.container}>
      <SelectComponent />
    </div>
  );
}