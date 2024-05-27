import {useState,useContext} from 'react'
import { Link } from 'react-router-dom';
import styles from '../styles/create_blog.module.css'
import { IMAGES } from '../assets';
import { BlogCategories } from '../data';
import PrimaryButton from '../components/Buttons/PrimaryButton';
import { MyContext } from '../context/MyContext';

export default function CreateBlog() {
  const {blogList, setBlogList} = useContext(MyContext);

  const [blog,setBlog] = useState({
    title: '',
    category: '',
    description: ''
  })
  const [errorMessage,setErrorMessage] = useState({
    title: '',
    category: '',
    description: ''
  })

  const [success,setSuccess] = useState(false)

  const onSubmit = (e)=>{
      e.preventDefault();
      if(!blog.title){
        setErrorMessage({...errorMessage,title: blog.title})
      }else if(!blog.category){
        setErrorMessage({...errorMessage,category: blog.category})
      }else if(!blog.description){
        setErrorMessage({...errorMessage,description: blog.description})
      }else{
        let arr = [...blogList];
        arr.push({
          ...blog,
          content: blog.description,
          id: arr.length+1,
          date: new Date().toDateString()
        })

        setBlogList([...arr]);
        setBlog({
          title: '',
          category: '',
          description: ''
        })
        setSuccess(true);
      }
  }
  
  return (
    <div className={styles.main}>
      <div className={styles.submain}>
        <form className={styles.form} onSubmit={onSubmit}>
          <img src={IMAGES.logo} alt='logo' />

          {success && 
            <div className={styles.success_wrapper}>
              <h3>Blog saved Successfully !!!</h3>
              <Link to={"/#allblogs"} className={styles.underline}>Go to home</Link>
            </div>
          }

          <div className={styles.input_wrapper}>
            <label htmlFor="title">Blog Title</label>

            <input type='text' id='title' placeholder='Blog Title'
             onChange={(e)=> setBlog((blog)=> {
              return {...blog, title: e.target.value}
            })} value={blog.title}
            maxLength={100}
             className={styles.input}/>

            <span className={styles.errorText}>{errorMessage?.title}</span>
          </div>

          <div className={styles.input_wrapper}>
            <label htmlFor="select">Blog Category</label>
            <select 
             onChange={(e)=> setBlog((blog)=> {
              return {...blog, category: e.target.value}
            })} value={blog.category}
             className={styles.select}>
              {
                BlogCategories?.map((item)=>(
                  <option key={item?.title}>{item?.title}</option>
                ))
              }
            </select>

            <span className={styles.errorText}>{errorMessage?.category}</span>
          </div>

          <div className={styles.input_wrapper1}>
            <label htmlFor="textarea">Blog Description</label>
            <textarea id='textarea' placeholder='Blog Title'
            onChange={(e)=> setBlog((blog)=> {
              return {...blog, description: e.target.value}
            })} value={blog.description}
             className={styles.textarea}/>

            <span className={styles.errorText}>{errorMessage?.description}</span>
          </div>

          <PrimaryButton type={'submit'} text={'Save Blog'} />

        </form>
      </div>
    </div>
  );
}
