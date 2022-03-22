import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./pages/productList/ProductList";
import UserList from "./pages/userList/UserList";
import NewUser from "./pages/newUser/NewUser";
import Product from "./pages/product/Product";
import User from "./pages/user/User";
import Home from "./pages/home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import NewProduct from "./pages/newProduct/NewProduct";

const App = () => {
  return (
    <BrowserRouter>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/users" element={<UserList />} />
        </Routes>
        <Routes>
          <Route path="/products" element={<ProductList />} />
        </Routes>
        <Routes>
          <Route path="/user/:userId" element={<User />} />
        </Routes>
        <Routes>
          <Route path="/product/:productId" element={<Product />} />
        </Routes>
        <Routes>
          <Route path="/newuser" element={<NewUser />} />
        </Routes>
        <Routes>
          <Route path="/newproduct" element={<NewProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
