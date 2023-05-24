import Card from "../UI/card";
import CategoryListing from "./categoryListing";
import "./productList.css";

const ProductList=(props) =>{
    return (
        <Card>
            <h1>PRODUCTS</h1>
            <h2>Electronic Items</h2>
            {
            props.productList.map((item) =>{
                if(item.Category==="Electronics")
                 {   
                    return <CategoryListing productData={item} deleteBtnHandler={props.deleteBtnHandler}/>
                 }
                return;
                })
            }
            <h2>Food Items</h2>
            {
            props.productList.map((item) =>{
                if(item.Category==="Food")
                 {   
                    return <CategoryListing productData={item} deleteBtnHandler={props.deleteBtnHandler}/>
                 }
                return;
                })
            }
            <h2>Skincare Items</h2>
            {
            props.productList.map((item) =>{
                if(item.Category==="Skincare")
                 {   
                    return <CategoryListing productData={item} deleteBtnHandler={props.deleteBtnHandler}/>
                 }
                return;
                })
            }
        </Card>
    )
}

export default ProductList;