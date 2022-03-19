import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route, Routes,} from 'react-router-dom';
import Messages from './components/Messages/Messages';
import Profile from './components/Profile/Profile';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile' element={<Profile profilePage={props.state.profilePage}
                                                     dispatch={props.dispatch}/>}/>
            <Route path='/messages/*' element={<Messages messagesPage={props.state.messagesPage}
                                                       dispatch={props.dispatch}/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  )
}

export default App;
