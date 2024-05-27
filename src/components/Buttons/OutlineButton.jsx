import styles from '../../styles/button.module.css'

// eslint-disable-next-line react/prop-types
export default function OutlineButton({text,onClick,color='default'}) {
  return (
    <button onClick={onClick} className={`${styles.outline} ${color == 'primary' ? styles.outlline_text_color : ''}`}>{text}</button>
  )
}