import React from 'react';
import style from './Dialog.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  const path = 'profile/' + props.id;

  return <div className={style.item}>
    <NavLink to={path} data-id={props.name}>{props.name}</NavLink>
  </div>;
};

const Dialog = (props) => {
  const dialogs = props.state.userSet.map(user => <DialogItem name={user.name} id={user.id}/>);
  const messages = props.state.messagesSet.map(message => <div className={style.dialog}>{message}</div>);

  return (
    <div className={style.main}>
      <div className={style.list}>
        {dialogs}
      </div>
      <div className={style.messages}>
        {messages}
      </div>
    </div>
  );
};

export default Dialog;
