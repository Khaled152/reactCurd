import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
function Read() {
    const [data, setData] = useState([])
    const {id} = useParams();
    useEffect(() => {
        axios.get('http://localhost:3000/users/'+ id ).then(res => {setData(res.data)

            console.log(res.data.name)
        }).catch(err => console.log(err))
    }, [])
    return (
        <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
            <h1>Details of User</h1>
            <div className="w-75 rounded bg-white border shadow p-4">
                <div className="d-flex mb-2">

                <strong>User Name : {data.name}</strong>
            </div>
            <div className="d-flex mb-2">

                <strong>User email : {data.email}</strong>
            </div>
            <div className="d-flex mb-2">

                <strong>User phone : {data.phone}</strong>
            </div>
            <Link to={`/update/${id}`}  className="btn btn-success">Update</Link>
            <Link to="/" className="btn btn-primary ms-3">Back</Link>
            </div>
        </div>
        )
}

export default Read
