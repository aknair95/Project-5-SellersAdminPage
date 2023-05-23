import Card from "../UI/card";

const CategoryListing=(props) =>{
    return (
        <Card>
            <ul>
                <li key={props.productData.ID}>
                {`Name: ${props.productData.Name} Price: ${props.productData.Price} Category: ${props.productData.Category}`}</li>
            </ul>
        </Card>
    )
}

export default CategoryListing;