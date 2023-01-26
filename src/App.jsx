import React from 'react'
import Blogs from './Blogs'
import Create from './Create'
import Edit from './Edit'
import Details from './Details'
import './index.css'
import { Route, Routes } from 'react-router-dom'

const App = () => {

  return (
    <div className='container mx-auto'>
      <Routes>
        <Route path='/' element={<Blogs/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='/blogs/:id' element={<Details/>}/>
      </Routes>
    </div>
  )
}

export default App