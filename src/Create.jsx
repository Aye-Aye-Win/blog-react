import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAddBlogMutation } from './services/blogApi';

const Create = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [img, setImg] = useState("");
    
    const navigate = useNavigate();
    const [addBlog] = useAddBlogMutation();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const newBlog = {id: Date.now(), title, desc, img};
        addBlog(newBlog);
        navigate('/');
    }
    
  return (
    <form className='mt-40' onSubmit={onSubmitHandler} >
        <div className="form-group my-5">
            <label htmlFor="" className="text-3xl form-label">Title</label>
            <input type="text" className="w-full border-b-2 text-2xl outline-none p-2 my-3 form-control" 
            value={title} onChange={e => setTitle(e.target.value)}/>
        </div>
        <div className="form-group my-5">
            <label htmlFor="" className="text-3xl form-label">Description</label>
            <input type="text" className="w-full border-b-2 text-2xl outline-none p-2 my-3 form-control"
            value={desc} onChange={e => setDesc(e.target.value)}/>
        </div>
        <div className="form-group my-5">
            <label htmlFor="" className="text-3xl form-label">Image</label>
            <input type="text" className="w-full border-b-2 text-2xl outline-none p-2 my-3 form-control" 
            value={img} onChange={e => setImg(e.target.value)}/>
        </div>
        <div className="flex flex-row justify-between my-20">
            <button type='submit' onClick={() => {addBlog(newBlog)}} className='text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded p-2'>Create</button>
            <Link to='/'>
                <button type='button' className='text-red-500 bg-transparent border-red-400 border rounded p-2'>Cancel</button>
            </Link>
            </div>
    </form>
  )
}

export default Create