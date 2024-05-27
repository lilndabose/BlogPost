import styles from '../styles/home.module.css'
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import NavBar from '../components/NavBar'
import { BlogCategories } from '../data';
import { useEffect,useState,useContext } from 'react';
import { MyContext } from '../context/MyContext';
import { useParams } from 'react-router-dom';

export default function BlogDetail() {
  const params = useParams('id');
  const currentIndex = Number(params.id)-1;
  const [activeItem,setActiveItem] = useState({})
  const {blogList} = useContext(MyContext);


  useEffect(()=>{
    sessionStorage.setItem("delete_id",currentIndex.toString())
    setActiveItem({...blogList[currentIndex]});
  },[])


  return (
    <div className={styles.main}>
      <div className={styles.submain}>
          <NavBar detailNavBar={true}/>

          {/* start of hero section */}
          <div className={styles.hero}>

              <div className={styles.hero_right}>
                <Zoom>
                  <img src={
                    BlogCategories.find((item)=> item.title === activeItem?.category)?.image
                  } alt='img' className={styles.detail_blog_img}/>
                </Zoom>
              </div>

              <div className={styles.hero_left}>
                <Bounce>
                  <span className={styles.mysimpleblog}>{blogList[currentIndex]?.date}</span>
                </Bounce>
                <h1>{blogList[currentIndex]?.title}</h1>
                <span className={styles.hero_sub_text}>
                  {blogList[currentIndex]?.content}
                </span>
                
              </div>

          </div>
          {/* end of hero section */}

      </div>
    </div>
  )
}
