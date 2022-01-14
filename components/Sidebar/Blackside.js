import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWonSign, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/Sidebar.module.css';
import Avatar from './Avatar';

export default function Blackside() {
  return (
    <div className={styles.blackside}>
      <div className={styles.wrapper}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faAngleLeft} color='#fafafa' width={10} />
        </div>
        <Avatar />
      </div>
    </div>
  );
}