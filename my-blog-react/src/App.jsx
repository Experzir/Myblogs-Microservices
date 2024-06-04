import React from 'react'
import Homepage from './pages/HomePage'
import BlogContentPage from './pages/BlogContentPage'
// import { Routes, Route } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useFetch from './hooks/useFetch'
import PdfPage from './pages/PdfPage';

function App() {

  let {loading, data, error} = useFetch('http://localhost:8080/v1/myblogs/getBlogs')
  if(loading) return <p>Loading...</p>
  if(error) return <p>Error!</p>

  return (
    <Router>
    <div>
      <Routes>
        <Route path='/' element={<Homepage blogs={data?data:""} />}></Route>
        <Route path='/blog/:id' element={<BlogContentPage  blogs={data?data:""}/>}></Route>
        <Route path='/pdf-viewer' element={<PdfPage></PdfPage>}></Route>
      </Routes>
    </div>
    </Router>
  )
}

export default App
