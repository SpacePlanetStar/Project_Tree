import React, { useState , useEffect} from 'react';
import {addDoc, collection} from 'firebase/firestore';
import { db , auth} from "../firbase-config";
import { useNavigate } from 'react-router-dom';

function CreatePosts({isAuth}){

    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");

    const postsCollectionRef = collection(db, "posts");

    let navigate = useNavigate();

    const createPost = async () => {
        await addDoc(postsCollectionRef, {title, postText, name: auth.currentUser.displayName, id: auth.currentUser.uid});
        navigate("/viewposts");
    };

    useEffect(() => {
        if (!isAuth){
            navigate("/login");

        }


    },[]);

    return(
        <div className = "createPostPage">
           
           <div className = "cpContainer">
              <h1>Create A Post</h1>
                <div className = "inputGp">
                    <label> 
                        Title: 
                    </label>
                    <input placeholder = "Title..." 
                    onChange={(event) => {setTitle(event.target.value);}}/>
                </div>
                <div className = "post-field">
                    <label>
                        Post:
                    </label>
                    <textarea className='post-text' placeholder="Post..."
                    onChange={(event) => {setPostText(event.target.value);}}/>
                </div>
                <button onClick={createPost}> Submit Post</button>
            </div> 
        </div>
    );
}

export default CreatePosts;