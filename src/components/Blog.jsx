/* eslint-disable react/prop-types */
import { useContext } from 'react';
import styles from '../styles/home.module.css'
import OutlineButton from './Buttons/OutlineButton'
import { useNavigate } from 'react-router-dom'
import { MyContext } from '../context/MyContext';


export default function Blog({date,img,title,content}) {
  const navigate = useNavigate();
  const truncatedContent = content.substring(0, 100)
  const {blogList} = useContext(MyContext);

  return (
    <div className={styles.blog}>
        <img src={img} />
        <span className={styles.blog_date}>{"Simple Blog - "+date}</span>
        <h1>{title}</h1>
        <span className={styles.blog_span}>{truncatedContent+' ...'}
        </span><br />

        <div className={styles.btn_container}>
        <OutlineButton onClick={()=> navigate(`/blog-detail/${blogList.findIndex((item)=> item.title === title && item.date === date)+1}`)} text={'Read more ...'} color='primary'/>
        </div>
  </div>
  )
}
