//import logo from './logo.svg';
import './styles/App.css';
import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import { Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home  from './pages/Home';
import BlogList  from './pages/BlogList';
import BlogDetails  from './pages/BlogDetails';
import CreateBlog  from './pages/CreateBlog';


function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route exact path="/" component={Home}/>
          <Route exact path="/blogs" component={BlogList}/>
          <Route exact path="/blog/:id" component={BlogDetails}/>
          <Route exact path="/create" component={CreateBlog}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
