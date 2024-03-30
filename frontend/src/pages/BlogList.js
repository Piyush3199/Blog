import React,{useState, useEffect} from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

function BlogList(){
    const [blogs, setBlog] = useState([]);
    
    useEffect(() => {
        axios.get('/routes/posts')
        .then(res => setBlog(res.data))
        .catch(err => console.log(err));
    },[]);

    return(
        <div>
            <h1>Blog List</h1>
            {blogs.map(blog => {
                <div key={blog._id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.content.substring(0, 100)}...</p>
                    <p>Author: {blog.author}</p>
                    <p>Date: {new Date(blog.date).toLocaleDateString()}</p>
                    <Link to={`/blog/${blog._id}`}>Read More</Link>
                </div>
            })}
        </div>
    );
}

export default BlogList;