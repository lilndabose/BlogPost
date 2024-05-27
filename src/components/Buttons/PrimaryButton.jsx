import styles from '../../styles/button.module.css'
import Bounce from 'react-reveal/Bounce';

// eslint-disable-next-line react/prop-types
export default function PrimaryButton({text,onClick,size='normal',type='button',danger=false}) {
    return (
      <Bounce>
        {
          type === 'button' ?
          <button onClick={onClick} className={`${styles.btn} ${size=='large' && styles.btn_large} ${danger == true && styles.danger_btn}`}>{text}</button>
          :
          <button type='submit' className={`${styles.btn} ${size=='large' && styles.btn_large}`}>{text}</button>
        }
      </Bounce>
    )
  }