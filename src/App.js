import logo from './logo.svg';
import './App.css';
import Navigation from './Pages/Shared/Navigation';
import Footer from './Pages/Shared/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import AddReview from './Pages/AddReview/AddReview';
import MyProfile from './Pages/MyProfile/MyProfile';
import ManageOrder from './Pages/ManageOrder/ManageOrder';
import AddProduct from './Pages/AddProduct/AddProduct';
import MakeAdmin from './Pages/MakeAdmin/MakeAdmin';
import ManageProduct from './Pages/ManageProduct/ManageProduct';
import SignUp from './Pages/Authentication/SignUp';
import SignIn from './Pages/Authentication/SignIn';
import NotFound from './Pages/NotFound/NotFound';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Blog from './Pages/Public/Blog';
import Contact from './Pages/Public/Contact';
import About from './Pages/Public/About';
import Portfolio from './Pages/Public/Portfolio';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrder';
import MyReview from './Pages/Dashboard/MyReview';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        {/* <Route path="/my-order" element={
          <RequireAuth>
            <MyOrder></MyOrder>
          </RequireAuth>
        }></Route> */}
        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path="/dashboard/my-review" element={<MyReview></MyReview>}></Route>
          <Route path="/dashboard/my-order" element={<MyOrder></MyOrder>}></Route>
          <Route path="/dashboard/add-review" element={<AddReview></AddReview>}></Route>
          <Route path="/dashboard/my-profile" element={<MyProfile></MyProfile>}></Route>
          <Route path="/dashboard/manage-order" element={<ManageOrder></ManageOrder>}></Route>
          <Route path="/dashboard/add-product" element={<AddProduct></AddProduct>}></Route>
          <Route path="/dashboard/make-admin" element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path="/dashboard/manage-product" element={<ManageProduct></ManageProduct>}></Route>
        </Route>

        <Route path="/order/:id" element={
          <RequireAuth>
            <PlaceOrder></PlaceOrder>
          </RequireAuth>
        }></Route>
        <Route path="/add-review" element={<AddReview></AddReview>}></Route>
        <Route path="/my-profile" element={<MyProfile></MyProfile>}></Route>
        <Route path="/manage-order" element={<ManageOrder></ManageOrder>}></Route>
        <Route path="/add-product" element={<AddProduct></AddProduct>}></Route>
        <Route path="/make-admin" element={<MakeAdmin></MakeAdmin>}></Route>
        <Route path="/manage-product" element={<ManageProduct></ManageProduct>}></Route>
        <Route path="/sign-in" element={<SignIn></SignIn>}></Route>
        <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
