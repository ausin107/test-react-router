import { useNavigate } from "react-router"


function Contact(){
    const navigate = useNavigate()
    return (
        <div>
            <h1>This is contact page</h1>
            <button onClick={() => navigate(-1)} style={{marginLeft: '20px', padding: '10px'}}>Go back</button>
        </div>
    )
}

export default Contact