import Image from 'next/image';
import styles from '../../styles/Avatar.module.css';

const loader = ({ src }) => {
  return 'https://i.pravatar.cc/150?img=70'
}

export default function Avatar() {
  return (
    <div className={styles.avatar}>
      <Image
        loader={loader}
        unoptimized={true}
        src='https://i.pravatar.cc/150?img=70'
        alt='hey!'
        layout='fill'
      />
    </div>
  );
}