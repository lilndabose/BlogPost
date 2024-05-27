import { useState,useContext } from 'react'
import { IMAGES } from '../assets';
import styles from '../styles/home.module.css'
import PrimaryButton from './Buttons/PrimaryButton';
import Zoom from 'react-reveal/Zoom';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../context/MyContext';

// eslint-disable-next-line react/prop-types
export default function NavBar({detailNavBar=false}) {
  const navigate = useNavigate();
  const { blogList,setBlogList } = useContext(MyContext)
 
    const [tabItems,setTabItems] = useState([
        {
          title: "Home",
          active: true,
          click: true
        },
        {
          title: "Entertainment",
          active: false,
          click: false
        },
        {
          title: "Couple Series",
          active: false,
          click: false
        },
        {
          title: "Contact us",
          active: false,
          click: false
        }
      ])
    
      const activeCircle=(index, event='mouseenter')=>{
        let arr = [...tabItems];
    
        if(event == 'mouseenter'){
          arr.forEach((item,idx)=>{
            if(idx == index && item.click == false){
              item.active = !item.active;
            }else if(item.click == false){
              item.active = false;
            }
          })
        }else{
          arr.forEach((item,idx)=>{
            if(idx == index){
              item.active = true;
              item.click = true;
            }else{
              item.active = false;
              item.click = false;
            }
          })
        }
    
        setTabItems([...arr]);
      }

      const deleteBlogPost=()=>{
        const id = Number(sessionStorage.getItem('delete_id'));
        const newArray = [...blogList].filter((item,index)=> index!=id);
        sessionStorage.clear();
        setBlogList([...newArray]);
        navigate("/")
      }

  return (
     <nav className={styles.nav}>
      <Zoom>
        <img src={IMAGES.logo} className={styles.image}/>
      </Zoom>

        {
        !detailNavBar &&
        <ul className={styles.ul}>
          {
            tabItems?.map((item,index)=>(
              <li onMouseOver={()=> activeCircle(index)}  onClick={()=> activeCircle(index,'click')} key={item?.title + index.toString()}>
                <span>{item?.title}</span><div className={`${styles.circle} ${item?.active && styles.circle_active}`}></div>
              </li>
            ))
          }
        </ul>
        }

     {
     detailNavBar ?
      <PrimaryButton onClick={()=> deleteBlogPost()} text={'Delete Blog'} danger={true} />
      :
      <PrimaryButton onClick={()=> navigate("/create-blog")} text={"Create new Blog"} />
      }
      </nav>
  )
}
