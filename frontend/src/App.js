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
          <Route path="/" element={<Home />}/>
          <Route path="/blogs" element={<BlogList />}/>
          <Route path="/blog/:id" element={<BlogDetails />}/>
          <Route path="/create" element={<CreateBlog />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<App />);
export default App;
