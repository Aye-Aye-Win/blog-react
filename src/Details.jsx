import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetSingleBlogQuery } from './services/blogApi';

const Details = () => {
  const {id} = useParams();
  const {data: blog} = useGetSingleBlogQuery(id);
  console.log(blog);
  return (
    <div className='flex justify-center h-screen'>
      <div className="flex flex-col justify-center">
        <img src={blog?.img} className='w-[600px] h-[400px] rounded-lg shadow-xl' alt="" />
        <h3 className='text-4xl text-slate-900 my-4 text-center'>Title</h3>
        <p className='text-4xl text-slate-900 my-4 text-center'>{blog?.title}</p>
        <h3 className='text-3xl text-slate-700 my-4 text-center'>Description</h3>
        <p className='text-3xl text-slate-700 my-4 text-center'>{blog?.desc}</p> 
        <div className="flex flex-row justify-between">
          <Link to={`/edit/${blog?.id}`}>
            <button className='text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded-md p-2'>Update</button>
          </Link>
          <Link to='/'>
            <button className='text-white bg-slate-600 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 rounded-lg p-2'>Back to home</button>
          </Link>
        </div>
        </div>
    </div>
  )
}

export default Details