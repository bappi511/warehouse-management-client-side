import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import Home from './pages/Home/Home/Home';
import NotFound from './pages/Shared/NotFound/NotFound';
import ProductInfo from './pages/ProductInfo/ProductInfo';
import AddProduct from './pages/AddProduct/AddProduct';
import ManageProduct from './pages/ManageProduct/ManageProduct';
import Login from './pages/Authentications/Login/Login';
import { ToastContainer } from 'react-toastify';
import Register from './pages/Authentications/Register/Register';
import RequireAuth from './pages/Authentications/RequireAuth/RequireAuth';
import Blog from './pages/Blog/Blog';
import Blogs from './pages/Blogs/Blogs';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/product/:productId' element={
          <RequireAuth>
            <ProductInfo></ProductInfo>
          </RequireAuth>
        }></Route>
        <Route path='/addproduct' element={
          <RequireAuth>
            <AddProduct />
          </RequireAuth>
        } />
        <Route path='/manageproduct' element={
          <RequireAuth>
            <ManageProduct />
          </RequireAuth>
        } />
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>} />
        <Route path='blog' element={<Blog></Blog>} />
        <Route path='blogs' element={<Blogs></Blogs>} />
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
