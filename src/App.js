import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Posts from './components/Posts/Posts';
import Dialog from './components/Dialog/Dialog';
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="application">
        <Header/>
        <Navigation/>
        <div>
          <Route path='/profile' render={() => <Dialog state={props.state}/>}/>
          <Route path='/message' render={() => <Posts
            state={props.state}
            dispatch={props.dispatch}
          />
          }/>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
