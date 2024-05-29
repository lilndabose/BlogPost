/* eslint-disable react/prop-types */
import { FaLeftLong, FaRightLong } from "react-icons/fa6";
import styles from '../styles/home.module.css'
import { useEffect } from "react";

export default function Paginator({paging,activeCategory, setPaging, size=1}) {

  const buttonAction=(action)=>{
    if(action === 'next'){
      if(paging?.stop >= size){
        return;
      }else{
        let endValue = size - paging?.stop > 6 ? paging.stop + 6 : paging.stop + (size - paging?.stop) 
        setPaging({...paging, start: paging?.stop, stop: paging?.stop + endValue})
      }
    }else{
      if(paging.start <= 1){
        return;
      }else{
        const startValue = paging?.start - 6 <= 0 ? 1 : paging?.start - 6
        setPaging({...paging, start: startValue, stop: paging?.start})
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
