import React, {useState} from "react";
import axios from 'axios';

function CreateBlog(){
    const [title, setTitle] = useState('');
    const [content,setContent] = useState('');
    const[author, setAuthor] = useState('');

    const handleSubmit = e => {
        e.preventDefault(); 
        const newBlog = {title, contest, author};
        axios.post('/routes/posts', newBlog)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
    };

    return(
        <div>
            <h1>Create Blog</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        ></input>
                </div>
                <div>
                    <label htmlFor="content">Content:</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={e => setContent(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="author">Author:</label>
                    <input
                        type="text"
                        id="author"
                        value={author}
                        onChange={e => setAuthor(e.target.value)}
                    />
                </div>
                <button type="submit">Create Blog</button>
            </form>
        </div>
    );
}

export default CreateBlog;