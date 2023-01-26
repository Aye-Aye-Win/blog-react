import React from 'react'
import { Link } from 'react-router-dom';
import Card from './Card'
import { useGetBlogsQuery } from './services/blogApi'

const Blogs = () => {
  const {data: blogs} = useGetBlogsQuery();
  return (
    <>
      <div className="flex justify-between mb-5 my-4">
        <h1 className='text-4xl text-slate-600 font-semibold'>Blogs</h1>
        <Link to='/create'>
          <button type='buton' className="text-xl text-white bg-slate-600 hover-bg-slate-800 focus:ring-4 focus:ring-slate-300 rounded-lg p-2">Create New Blog</button>
        </Link>
      </div>
      <div className="flex flex-row flex-wrap gap-10">
        {blogs?.map((blog) => <Card key={blog.id} blog={blog}/>)}
      </div>    
    </>
  )
}

export default Blogs