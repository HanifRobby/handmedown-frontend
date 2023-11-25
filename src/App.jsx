import {
  Homepage,
  Login,
  ProductDetails,
  Register,
  Products,
  Search,
  AddToCart,
  Profile,
  OtherProfile,
  Review,
  OrderHistory,
} from "./pages";
import "./app.css";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products" element={<Products />} />
      <Route path="/search" element={<Search />} />
      <Route path="/search/:searchTerm" element={<Search />} />
      <Route path="/product-details/:id" element={<ProductDetails />} />
      <Route path="/addToCart" element={<AddToCart />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/other-profile" element={<OtherProfile />} />
      <Route path="/review" element={<Review />} />
      <Route path="/order-history" element={<OrderHistory />} />
    </Routes>
  );
};

export default App;
