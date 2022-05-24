import logo from './logo.svg';
import './App.css';
import Navigation from './Pages/Shared/Navigation';
import Footer from './Pages/Shared/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import MyOrder from './Pages/MyOrder/MyOrder';
import AddReview from './Pages/AddReview/AddReview';
import MyProfile from './Pages/MyProfile/MyProfile';
import ManageOrder from './Pages/ManageOrder/ManageOrder';
import AddProduct from './Pages/AddProduct/AddProduct';
import MakeAdmin from './Pages/MakeAdmin/MakeAdmin';
import ManageProduct from './Pages/ManageProduct/ManageProduct';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/my-order" element={<MyOrder></MyOrder>}></Route>
        <Route path="/add-review" element={<AddReview></AddReview>}></Route>
        <Route path="/my-profile" element={<MyProfile></MyProfile>}></Route>
        <Route path="/manage-order" element={<ManageOrder></ManageOrder>}></Route>
        <Route path="/add-product" element={<AddProduct></AddProduct>}></Route>
        <Route path="/make-admin" element={<MakeAdmin></MakeAdmin>}></Route>
        <Route path="/manage-product" element={<ManageProduct></ManageProduct>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
