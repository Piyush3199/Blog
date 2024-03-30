import React, {useState, useEffect} from "react";
import axios from 'axios';
import {useParams} from 'react-router-dom';

function BlogDetails(){
    const [blog, setBlog] = useState({});
    const {id} = useParams();

    useEffect(() => {
        axios.get(`/router/posts/${id}`)
        .then(res => setBlog(res.data))
        .catch(err => console.log(err));
    }, [id]);

    return (
        <div>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
            <p>Author: {blog.author}</p>
            <p>Date: {new Date(blog.date).toLocaleDateString()}</p>
        </div>
    );
}

export default BlogDetails;