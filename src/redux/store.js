import { new_post_reducer } from './new-post-reducer';

let store = {
  renderProject() {},
  _state: {
    userSet: [{
      id: 1,
      name: 'Karl'
    }, {
      id: 2,
      name: 'Laurent'
    }, {
      id: 3,
      name: 'Dimitrii'
    }],
    messagesSet: ['Hi', 'Hello', 'Bye'],
    posts: {
      content: ['post 1', 'post 2'],
      fieldState: 'test content',
      buttonColor: 'gray'
    },
  },
  getState() {return this._state;},
  dispatch(action) {
    this._state.posts = new_post_reducer(this._state.posts, action);
    return this.renderProject(this._state);
  },
  subscriber(observer) {
    this.renderProject = observer;
  }
};

export default store;
window.store = store;
