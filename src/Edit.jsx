import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEditBlogMutation, useGetSingleBlogQuery } from './services/blogApi';

const Edit = () => {
    const {id} = useParams();
    const {data: blog} = useGetSingleBlogQuery(id);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [img, setImg] = useState("");
    const navigate = useNavigate();
    const [editBlog] = useEditBlogMutation(id);

    useEffect(() => {
        setTitle(blog?.title);
        setDesc(blog?.desc);
        setImg(blog?.img);
    },[blog]);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const newData = {id, title, desc, img};
        editBlog(newData);
        navigate('/');
    }

  return (
    <form className='mt-40' onSubmit={onSubmitHandler}>
        <div className="form-group my-5">
            <label htmlFor="" className="text-3xl form-label">Title</label>
            <input type="text" className="w-full border-b-2 text-2xl outline-none p-2 my-3 form-control"
            defaultValue={title} onChange={e => setTitle(e.target.value)}/>
        </div>
        <div className="form-group my-5">
            <label htmlFor="" className="text-3xl form-label">Description</label>
            <input type="text" className="w-full border-b-2 text-2xl outline-none p-2 my-3 form-control"
            defaultValue={desc} onChange={e => setDesc(e.target.value)}/>
        </div>
        <div className="form-group my-5">
            <label htmlFor="" className="text-3xl form-label">Image</label>
            <input type="text" className="w-full border-b-2 text-2xl outline-none p-2 my-3 form-control"
            defaultValue={img} onChange={e => setImg(e.target.value)}/>
        </div>
        <div className="flex flex-row justify-between">
            <button type='submit' onClick={() => {editBlog(newData)}} className='text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded p-2'>Update</button>
            <Link to='/'>
                <button className='text-red-500 bg-transparent border-red-400 border rounded p-2'>Cancel</button>
            </Link>
        </div>
    </form>
  )
}

export default Edit