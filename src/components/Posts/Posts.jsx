import classes from './Posts.module..css';
import React from 'react';
import { newPost, updateFieldState } from '../../redux/new-post-reducer';

const Posts = (props) => {
  let newPostData = React.createRef();
  const posts = props.state.posts.content.map(item => <div data-id='post'>{item}</div>);

  const addedPost = () => props.dispatch(newPost(newPostData.current.value));
  const onPostChange = () => {
    let text = newPostData.current.value;
    props.dispatch(updateFieldState(text));
  };

  return <div className="content">
    <div className="background">
      <img src='https://html.sammy-codes.com/images/background.jpg'/>
    </div>
    <div className='elements'>
      <h3>My posts</h3>
      <div>
        <textarea ref={newPostData} onChange={onPostChange} value={props.state.posts.fieldState} data-id='field'/>
      </div>
      <div>
        <button style={{ backgroundColor: props.state.posts.buttonColor }} onClick={addedPost} data-id='addPost'>Add
          post
        </button>
      </div>
      <div className={classes.item}>
        {posts}
      </div>
    </div>
  </div>;
};

export default Posts;
