import styles from '../styles/home.module.css'
import { IMAGES } from '../assets'
import PrimaryButton from '../components/Buttons/PrimaryButton'
import OutlineButton from '../components/Buttons/OutlineButton'
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import NavBar from '../components/NavBar'
import { BlogCategories } from '../data';

import { useEffect,useState,useContext } from 'react';
import Blog from '../components/Blog';
import Paginator from '../components/Paginator';
import { MyContext } from '../context/MyContext';


export default function Home() {
  const [blogCategories,setBlogCategories] = useState([{}])
  const [activeCategory,setActiveCategory] = useState({})
  const [paging,setPaging] = useState({
    start: 1,
    stop: 6
  })
  const {blogList} = useContext(MyContext);


  useEffect(()=>{
    let arr = BlogCategories.map((item,index)=>{
      return {
        title: item?.title,
        active: index == 0 ? true : false,
        image: item?.image
      }
    })

    setBlogCategories([...arr]);
    setActiveCategory({...arr.find((item)=> item.active)});
  },[])

  // function to toggle active 
  const toggleBlogCategory=(index, category)=>{
    let arr = [...blogCategories].map((item,idx)=>{
      return{
        ...item, 
        active: index === idx ? true : false
      }
    })

    setBlogCategories([...arr]);
    setPaging({
      start: 1,
      stop: 6
    })
    setActiveCategory(category)
  }

  return (
    <div className={styles.main}>
      <div className={styles.submain}>
          <NavBar />

          {/* start of hero section */}
          <div className={styles.hero}>

              <div className={styles.hero_left}>
                <Bounce>
                  <span className={styles.mysimpleblog}>MySimpleBlog</span>
                </Bounce>
                <h1>Uncover compelling article that will capture your interest</h1>
                <span className={styles.hero_sub_text}>Our blog offers a diverse range of topics to satisfy your curiosity and fuel 
                  your journey towards a more fulfilling life. Subscribe to our newsletter and be the
                  first to receive notifications about our newest articles
                </span>
                
                <PrimaryButton onClick={()=> console.log('click hero')} text='Subscribe' size='large' />
                
              </div>

              <div className={styles.hero_right}>
                <Zoom>
                  <img src={IMAGES.hero_photo4} alt='img'/>
                  <img src={IMAGES.hero_photo2} alt='img'/>
                  <img src={IMAGES.hero_photo3} alt='img'/>
                  <img src={IMAGES.hero_photo1} alt='img'/>
                </Zoom>
              </div>
          </div>
          {/* end of hero section */}

          <div className={styles.blogs_section}>
              <a className={styles.mysimpleblog} href='allblogs'>All Blogs</a>
              <h1>Explore diverse categories of<br /> our blogs</h1>
              <span className={styles.discover_span}>Discover blogs that inspire and motivate to reach new heights. Explore our content for valuable<br />
                insights and empowering stories that will fuel your ambition, Check it out
              </span>

              <div className={styles.category_list}>
              {
                blogCategories?.map((category,index)=>{
                  return(
                    !category?.active ?
                    <OutlineButton onClick={()=>toggleBlogCategory(index, category)} key={category?.title + index.toString()} text={category?.title}/> :
                    <PrimaryButton onClick={()=>toggleBlogCategory(index, category)} key={category?.title + index.toString()} text={category?.title}/>
                  )
                })
              }
              </div>

              {/* List of blogs */}
              <div className={styles.blogs_list}>
                  {
                    blogList?.filter(item => item?.category?.toLocaleLowerCase() == activeCategory?.title?.toLocaleLowerCase())?.slice(paging.start-1,paging.stop)?.map((blog,index)=>(
                        <Blog key={blog?.id + index.toString()} img={activeCategory?.image} date={blog?.date} title={blog?.title} content={blog?.content}/>
                    ))
                  }

                  {
                  blogList?.filter(item => item?.category?.toLocaleLowerCase() == activeCategory?.title?.toLocaleLowerCase()).slice(paging.start-1,paging.stop) <=0 && 
                  <div className={styles.blog_not_found}>
                    <Zoom>
                    <img src={IMAGES.not_found} />
                    <h1>No Blog Post</h1>
                    </Zoom>
                  </div>
                  }
              </div>
              {/* End of blogs */}

              <Paginator size={
                blogList?.filter(item => item?.category?.toLocaleLowerCase() == activeCategory?.title?.toLocaleLowerCase()).length
              } 
              paging={paging}
              setPaging = {setPaging}
              activeCategory={activeCategory}
              />

          </div>

      </div>
    </div>
  )
}
