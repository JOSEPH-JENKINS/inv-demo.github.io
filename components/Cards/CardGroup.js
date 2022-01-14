import styles from '../../styles/Cards.module.css'

export default function CardGroup({ children }) {
  return (
    <div className={styles.cardgroup}>
      {children}
    </div>
  )
}