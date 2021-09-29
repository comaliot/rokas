import { useRouter } from 'next/router';
import styles from '../styles/Button.module.css';

const Button = props => {
  const router = useRouter();
  return (
    <button
      className={styles.button}
      onClick={() => router.push('mailto:samuolis.rokas@gmail.com')}
    >
      {props.text}
    </button>
  );
};

export default Button;
