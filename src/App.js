import './App.css';
import Home from './pages/Home'
import Store from './pages/Store'
import Contact from './pages/Contact'
import Product from './pages/Product';
import PageNotFound from './pages/PageNotFound';
import { Routes, Route, Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
function App() {
  const navigate = useNavigate()
  return (
    <div style={{marginLeft: '50px'}}>
      <nav>
        {/* Cách 1 để sử dụng react-router đó là dùng sẳn Link thay thế cho a tag, còn nếu dùng a tag thì sẽ re-render lại page  */}
        <Link to='/' style={{ paddingRight: '30px', fontSize: "20px" }}>Home</Link>
        <button onClick={() => navigate('/store')} style={{ marginRight: '30px', fontSize: "20px" }}>Store</button>
        <Link to='/contact' style={{ paddingRight: '30px', fontSize: "20px" }}>Contact</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='store' element={<Store />}>
          <Route path=':product' element={<Product />} />
        </Route>
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>


  );
}

export default App;
