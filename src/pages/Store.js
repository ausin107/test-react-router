import { Link, Outlet } from "react-router-dom"


function Store() {
    const items = [
        {
            id: 1,
            name: 'Iphone 13',
            quantity: 20,
            price: 1000,
            image: 'https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2021/09/15/image-removebg-preview-15.png'
        },
        {
            id: 2,
            name: 'MacBook Pro 13',
            quantity: 30,
            price: 2000,
            image: 'https://media.idownloadblog.com/wp-content/uploads/2020/11/MacBook-Pro-M1-processor.jpg'
        },
        {
            id: 1,
            name: 'Airpod 3',
            quantity: 50,
            price: 500,
            image: 'https://cdn.tgdd.vn/Products/Images/54/250701/bluetooth-airpods-3-1.jpg'
        }
    ]
    return (
        <div>
            <h1>This is Store page</h1>
            <ul style={{ marginLeft: '20px', fontSize: '30px', lineHeight: '40px', fontWeight: 'bold' }}>
                {
                    items.map(item => {
                        return (
                            <li>
                                <Link to={`${item.name}`} state={{ quantity: `${item.quantity}`, price: `${item.price}`,image: `${item.image}` }} style={{ textDecoration: 'none', color: 'black' }}>{item.name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
            {/* Sử dụng Outlet chỉ để thay đổi phần cần thay đổi của trang chính trong route (store), phần còn lại giữ nguyên 
                Còn muốn thay đổi cả Page thì tạo Route mới cùng cấp với route này luôn
            */}
            <Outlet />
        </div>
    )
}

export default Store