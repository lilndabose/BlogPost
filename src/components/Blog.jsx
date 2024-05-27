import styles from '../styles/home.module.css'
import OutlineButton from './Buttons/OutlineButton'
import { useNavigate } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export default function Blog({date,img,title,content,index}) {
  const navigate = useNavigate();
  // eslint-disable-next-line react/prop-types
  const truncatedContent = content.split(" ").splice(0,100).join(" ")

  return (
    <div className={styles.blog}>
        <img src={img} />
        <span className={styles.blog_date}>{"Simple Blog - "+date}</span>
        <h1>{title}</h1>
        <span className={styles.blog_span}>{truncatedContent+' ...'}
        </span><br />

        <div className={styles.btn_container}>
        <OutlineButton onClick={()=> navigate(`/blog-detail/${index+1}`)} text={'Read more ...'} color='primary'/>
        </div>
  </div>
  )
}
