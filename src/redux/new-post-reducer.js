export const newPostType = 'new-post';
export const updateFieldStateType = 'update-field-state';

export const new_post_reducer = (state, action) => {
  state.buttonColor = 'yellow';
  if (action.type === newPostType) {
    state.content.push(action.postMessage);
    state.fieldState = '';
  } else if (action.type === updateFieldStateType) {
    state.fieldState = action.content;
  }

  return state;
};

export const newPost = (text) => ({
  type: newPostType,
  postMessage: text
});
export const updateFieldState = (text) => ({
  type: updateFieldStateType,
  content: text
});
