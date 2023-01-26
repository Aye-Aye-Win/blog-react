import React from 'react'
import { Link } from 'react-router-dom';
import { useDeleteBlogMutation } from './services/blogApi'

const Card = ({blog: {title, desc, img, id}}) => {
    const [deleteBlog] = useDeleteBlogMutation();

  return ( 
    <div className=" text-slate-800 border rounded-lg shadow-xl mt-5">
        <img className="w-[350px] h-[240px] rounded-t-lg" src={img} alt="" />
        <div className="p-3">
            <h3 className="mb-2 text-center text-xl font-bold text-slate-800">{title}</h3>
            <p className="mb-3 text-center font-normal text-slate-800">{desc}</p>
            <div className='flex justify-between'>
            <Link to={`/blogs/${id}`}>
                <button type='button' className="inline-flex items-center px-3 py-2  
                 text-white bg-slate-700 rounded-lg hover:bg-slate-800 
                 focus:ring-4 focus:ring-slate-300">
                    Read More
                </button>
            </Link>
            <button type='button' onClick={() => {deleteBlog(id)}} className='text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 px-3 rounded-lg cursor-pointer'> 
            Delete
            </button>
            </div>   
        </div>
    </div>                                      
  )
}

export default Card