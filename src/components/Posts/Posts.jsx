import classes from './Posts.module..css';
import React from 'react';

const Posts = (props) => {
  let postData = React.createRef();
  const addedPost = () => alert(postData.current.value);

  return <div className="content">
    <div className="background">
      <img src='https://html.sammy-codes.com/images/background.jpg'/>
    </div>
    <div className='elements'>
      <h3>My posts</h3>
      <div>
        <textarea ref={postData}></textarea>
      </div>
      <div>
        <button onClick={addedPost}>Add post</button>
      </div>
      <div className={classes.item}>
        <a>test post.. </a>
      </div>
    </div>
  </div>;
};

export default Posts;
