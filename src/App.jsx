import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import CreateBlog from "./pages/CreateBlog"
import EventDetail from "./pages/BlogDetail"
import { MyContext } from "./context/MyContext"

export default function App() {

  const [blogList,setBlogList] = useState([
    {
      content: "hello 1",
          id: 1,
          date: new Date().toDateString(),
          category: "Education",
          title: "hello 1"
    },
    {
      content: "hello 2",
          id: 2,
          date: new Date().toDateString(),
          category: "Education",
          title: "hello 2"
    },
    {
      content: "hello 3",
          id: 3,
          date: new Date().toDateString(),
          category: "Education",
          title: "hello 3"
    },
    {
      content: "hello 4",
          id: 4,
          date: new Date().toDateString(),
          category: "Education",
          title: "hello 4"
    },
    {
      content: "hello 1",
          id: 1,
          date: new Date().toDateString(),
          category: "Programming",
          title: "hello 1"
    },
    {
      content: "hello 2",
          id: 2,
          date: new Date().toDateString(),
          category: "Programming",
          title: "hello 2"
    },
    {
      content: "hello 3",
          id: 3,
          date: new Date().toDateString(),
          category: "Programming",
          title: "hello 3"
    },
    {
      content: "hello 4",
          id: 4,
          date: new Date().toDateString(),
          category: "Programming",
          title: "hello 4"
    },
    {
      content: "hello 5",
          id: 5,
          date: new Date().toDateString(),
          category: "Programming",
          title: "hello 5"
    },
    {
      content: "hello 6",
          id: 6,
          date: new Date().toDateString(),
          category: "Programming",
          title: "hello 6"
    },
    {
      content: "hello 7",
          id: 1,
          date: new Date().toDateString(),
          category: "Programming",
          title: "hello 7"
    },
    {
      content: "hello 8",
          id: 1,
          date: new Date().toDateString(),
          category: "Programming",
          title: "hello 8"
    }
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
