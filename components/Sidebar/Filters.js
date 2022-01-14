import styles from '../../styles/Filters.module.css';
import Filter from './Filter';

export default function Filters() {
  return (
    <div className={styles.filters}>
      <div className={styles.filtersHead}>
        <h1>Filters</h1>
        <p className={styles.colored}>Expand all filters</p>
      </div>
      <div className={styles.filtergroup}>
        <Filter title="Status" />
        <Filter title="Geography" />
        <Filter title="Asset Value" />
        <Filter title="Return Characteristics" />
        <Filter title="Strategy" />
        <Filter title="Instrument Value" />
      </div>
      <div>
        <div className={styles.checkbox}>
          <input type="checkbox" name="checkbox" />
          <h1>Remember my filters</h1>
        </div>
        <div className={styles.button}>
          <a href='#'>Apply Filters</a>
        </div>
      </div>
    </div>
  )
};