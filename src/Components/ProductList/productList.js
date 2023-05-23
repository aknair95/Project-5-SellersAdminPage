import Card from "../UI/card";
import "./productList.css";

const ProductList=(props) =>{
    const categoryList=["Electronics","Food","Skincare"];
    return (
        <Card>
            <h1>PRODUCTS</h1>
            <h2>Electronic Items</h2>
            {
            props.productList.map((item) =>{
                if(item.Category==="Electronics")
                 {   return (
                        <div>
                            <ul>
                                <li key={item.ID}>{`Name: ${item.Name} Price: ${item.Price} Category: ${item.Category}`}</li>
                            </ul>
                        </div>
                        )}
                return;
                })
            }
            <h2>Food Items</h2>
            {
            props.productList.map((item) =>{
                if(item.Category==="Food")
                 {   return (
                        <div>
                            <ul>
                                <li key={item.ID}>{`Name: ${item.Name} Price: ${item.Price} Category: ${item.Category}`}</li>
                            </ul>
                        </div>
                        )}
                return;
                })
            }
            <h2>Skincare Items</h2>
            {
            props.productList.map((item) =>{
                if(item.Category==="Skincare")
                 {   return (
                        <div>
                            <ul>
                                <li key={item.ID}>{`Name: ${item.Name} Price: ${item.Price} Category: ${item.Category}`}</li>
                            </ul>
                        </div>
                        )}
                return;
                })
            }
        </Card>
    )
}

export default ProductList;