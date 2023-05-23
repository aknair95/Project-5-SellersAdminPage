import ProductInfoForm from "./Components/ProductInfo/productInfoForm";
import ProductList from "./Components/ProductList/productList";
import Card from "./Components/UI/card";
import { useState } from "react";

function App() {
  const [productList,setProductList]=useState([]);

  const onProductDataHandler=(newProductData) =>{
    setProductList((prevProductList) =>{
      const updatedProductData=[...prevProductList,{ ID: newProductData.ID,Price: newProductData.Price,
                                Name: newProductData.Name,Category: newProductData.Category}];
      return updatedProductData;
})};
console.log(productList);
  return (
    <Card className="App">
      <ProductInfoForm onAddProductData={onProductDataHandler}/>
      <ProductList productList={productList}/>
    </Card>
  );
}

export default App;
