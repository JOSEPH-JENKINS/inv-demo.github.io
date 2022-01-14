import Image from 'next/image';
import styles from '../../styles/Cards.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faSearchLocation, faSignal, faDollarSign } from '@fortawesome/free-solid-svg-icons';

const loader = ({ src }) => {
  return 'https://i.pravatar.cc/450?img=70'
}

export default function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.cardimage}>
        <Image
          loader={loader}
          unoptimized={true}
          src='https://i.pravatar.cc/450?img=70'
          alt='hey!'
          layout='fill'
        />
      </div>
      <div className={styles.cardtext}>
        <div className={styles.cardhead}>
          <h1>Property name</h1>
          <FontAwesomeIcon icon={faStar} color='red' width={15} height={15} />
        </div>
        <br />
        <div className={styles.details}>
          <div className={styles.detail}>
            <FontAwesomeIcon icon={faSearchLocation} width={15} height={15} />
            <p>New York, NY</p>
          </div>
          <div className={styles.detail}>
            <FontAwesomeIcon icon={faSignal} width={15} height={15} />
            <p>Multifamily</p>
          </div>
          <div className={styles.detail}>
            <FontAwesomeIcon icon={faDollarSign} width={15} height={15} />
            <p>Preferred equity</p>
          </div>
        </div>
        <div className={styles.moredetails}>
          <div className={styles.first}>
            <p><b>Offering Size</b>: $5,035,000</p>
            <p><b>Sponser Name</b>: Lorem ipsum</p>
          </div>
          <div className={styles.second}>
            <p><b>Cash-On-Cash Yield</b>: 7.14%</p>
            <p><b>Sponser Type</b>: Established</p>
          </div>
        </div>
      </div>
    </div>
  );
}