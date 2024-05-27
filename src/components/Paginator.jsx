import { FaLeftLong, FaRightLong } from "react-icons/fa6";
import styles from '../styles/home.module.css'

// eslint-disable-next-line react/prop-types
export default function Paginator({currentIndex, setCurrentIndex, size=1}) {

  const buttonAction=(action)=>{
    if(action === 'next'){
      if(currentIndex === size-1){
        setCurrentIndex(0);
      }else{
        setCurrentIndex((currentIndex)=> currentIndex+1);
      }
    }else{
      if(currentIndex === 0){
        setCurrentIndex(size-1);
        return;
      }else{
        setCurrentIndex(currentIndex-1);
      }
    }
  }
  
  return (
    <div className={styles.pagination}>
      <div className={styles.next_btn}  onClick={()=> buttonAction('previous')}>
        <FaLeftLong />
        <h5>Previous</h5>
      </div>

      <div className={styles.next_btn} onClick={()=> buttonAction('next')}>
        <h5>Next</h5>
        <FaRightLong />
      </div>
    </div>
  );
}
