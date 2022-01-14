import styles from '../../styles/Filters.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

export default function Filter({ title }) {
  return (
    <div className={styles.filter}>
      <h1>{title}</h1>
      <FontAwesomeIcon icon={faAngleDown} width={24} height={24} />
    </div>
  )
}