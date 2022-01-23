import { useParams, useLocation } from "react-router"

function Product(){
    const {product} = useParams() //Dùng param để lấy giá trị từ link 
    // có thể gán bằng trực tiếp hoặc dùng { biến } của ES6
    const location = useLocation() // dùng location để lấy data được truyền qua Link component dưới dạng obj
    const item = location.state
    return (
        <>
            <h1>Item Information</h1>
            <h2>Item: {product}</h2>
            <img src={item.image} style={{width: '200px', height: '100%'}} />
            <div>Quantity: {item.quantity}</div>
            <div>Price: {item.price}</div>
        </>
    )
}
export default Product