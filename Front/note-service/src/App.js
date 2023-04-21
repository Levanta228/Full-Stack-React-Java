import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import {FetchAllNotes} from "./main/FetchAllNotes";
import {Home} from './components/Home';
import {CreatePost} from "./main/CreatePost";
import {UpdateNote} from "./main/UpdateNote";
import {DeleteNote} from "./main/DeleteNote";
import {Registration} from "./main/Registration";


function App() {
  return(
      <Router>
          <div>
              <h2>Welcome to Note Service</h2>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <ul className="navbar-nav mr-auto">
                      <li><Link to={'/'} className="nav-link"> Home </Link></li>
                      <li><Link to={'/fetchNotes'} className="nav-link">All Notes</Link></li>
                      <li><Link to={'/createNote'} className="nav-link">Create</Link></li>
                      <li><Link to={'/updateNote'} className="nav-link">Update</Link></li>
                      <li><Link to={'/deleteNote'} className="nav-link">Delete</Link></li>
                      <li><Link to={'/register'} className="nav-link">Register</Link></li>
                  </ul>
              </nav>
              <hr />
              <Routes>
                  <Route exact path='/' element={<Home/>} />
                  <Route path='/fetchNotes' element={<FetchAllNotes/>} />
                  <Route path='/createNote' element={<CreatePost/>} />
                  <Route path='/updateNote' element={<UpdateNote/>} />
                  <Route path='/deleteNote' element={<DeleteNote/>} />
                  <Route path='/register' element={<Registration/>} />
              </Routes>
          </div>
      </Router>
  )
}

export default App;
