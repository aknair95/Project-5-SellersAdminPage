import ProductInfoForm from "./Components/ProductInfo/productInfoForm";
import ProductList from "./Components/ProductList/productList";
import { Fragment } from "react";
import Card from "./Components/UI/card";

function App() {
  return (
    <Card className="App">
      <ProductInfoForm/>
      <ProductList/>
    </Card>
  );
}

export default App;
