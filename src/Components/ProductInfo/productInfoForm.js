import "./productInfoForm.css";

const ProductInfoForm=(props) =>{
    const addProductBtnHandler=(e) =>{
        e.preventDefault();
        
    }
    return (
        <form className="form">
            <label htmlFor="id">Product ID:</label>
            <input type="number" id="id"/>
            <label htmlFor="amt">Selling Price: Rs</label>
            <input type="number" id="amt" />
            <label htmlFor="productName">Product Name:</label>
            <input type="text" id="productName"/>
            <label htmlFor="category">Choose a Category:</label>
            <select id="category">
                <option>Electronics</option>
                <option>Food</option>
                <option>Skincare</option>
                <option>Cosmetics</option>
                <option>Toys</option>
                <option>Electrical</option>
                <option>Decoration</option>
                <option>Tools</option>
                <option>Miscellaneous</option>
                <option>Kitchen</option>
                <option>Healthcare</option>
                <option>Furniture</option>
            </select>
            <button id="addBtn" onClick={addProductBtnHandler}>Add Product</button>
        </form>    
    )
}

export default ProductInfoForm;