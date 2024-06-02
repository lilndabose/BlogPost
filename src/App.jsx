import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import CreateBlog from "./pages/CreateBlog"
import EventDetail from "./pages/BlogDetail"
import { MyContext } from "./context/MyContext"

export default function App() {

  const [blogList,setBlogList] = useState([
    
  ]) 

  return (
    <MyContext.Provider value={{ blogList, setBlogList }}>
    <Router>
      <Routes>
        <Route element={ <Home />} path="/" exact />
        <Route element={<EventDetail /> } path="/blog-detail/:id" exact />
        <Route element={<CreateBlog />} path="/create-blog" exact />
      </Routes>
    </Router>
    </MyContext.Provider>
  )
}
