import styles from '../../styles/button.module.css'

// eslint-disable-next-line react/prop-types
export default function RoundedOutlineButton({text,onClick,color='default',active=false}) {
  return (
    <button onClick={onClick} className={`${styles.outline} ${styles.rounded_outline} ${active && styles.rounded_active}  ${color == 'primary' ? styles.outlline_text_color : ''}`}>{text}</button>
  )
}