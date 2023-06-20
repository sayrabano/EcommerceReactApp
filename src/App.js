// required library
import ProductDetail from "./Component/ProductDetail";
import AddProduct from "./Component/AddProduct";
import CartItems from "./Component/CartItems";
import ProductItemList from "./Component/ProductItemList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addproducts } from "./actions/index";
import customFetch from "./api";
import { useEffect } from "react";

import Navbar from "./Component/Navbar";

// main file
function App() {
  // using useselector
  let productDetailItem = useSelector((state) => state.itemToDisplay);

  // rl of api 
  const url = "https://my-json-server.typicode.com/sayrabano/apidata/db";

  const dispatch = useDispatch();

  // useeffect to display all products details
  useEffect(() => {
    let response = customFetch(url, {
      method: "GET",
      
    });
    response.then((data) => {
      let modifiedData = data.products.map((item) => {
        item.edit = true;
        return item;
      });
      // setting to local storage
      window.localStorage.setItem("products", JSON.stringify(modifiedData));
      let products = JSON.parse(window.localStorage.getItem("products"));
      dispatch(addproducts(products));
    });
  }, []);

  return (
    <div className="App">
      {/* using router */}
      <BrowserRouter>
      {/* navbar */}
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductItemList />} />
          <Route path="/addproducts" element={<AddProduct />} />
          <Route
            path={`/productdetails/${productDetailItem.id}`}
            element={<ProductDetail item={productDetailItem} />}
          />
          <Route path="/cart" element={<CartItems />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
