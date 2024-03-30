import logo from './logo.svg';
import './App.css';
import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import Home  from './src/pages/Home';
import BlogList  from './src/pages/BlogList';
import BlogDetails  from './src/pages/BlogDetails';
import CreateBlog  from './src/pages/CreateBlog';


function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/blogs" component={BlogList}/>
          <Route exact path="/blog/:id" component={BlogDetails}/>
          <Route exact path="/create" component={CreateBlog}/>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
