import Blackside from "./Blackside";
import Filters from "./Filters";
import styles from '../../styles/Sidebar.module.css';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Blackside />
      <Filters />
    </div>
  );
};