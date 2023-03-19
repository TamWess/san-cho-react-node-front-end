import styles from './Button.module.scss';

export default function Button ({ onClick }) {
  return (
    <div className={styles.boutonSuivant}>
      <button
        onClick={onClick}
        className={styles.callToAction}
      >
        Suivant
      </button>
    </div>
  )
}