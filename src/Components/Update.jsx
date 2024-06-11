import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
function Update() {



    //const [data, setData] = useState([])
    const { id } = useParams();
    
    const [values , setValues] = useState({
        name:'',
        email:'',
        phone:''
    })
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:3000/users/' + id).then(res => {
            setValues(res.data)

            console.log(res.data.name)
        }).catch(err => console.log(err))
    }, [])

    const handleUpdate = (e)=>{
        e.preventDefault();
        axios.put('http://localhost:3000/users/'+id, values).then(res => {
            
            console.log(res.data)
            navigate("/")
        
        }).catch(err => console.log(err))
        
    }



    return (
        <div className="d-flex w-100  justify-content-center align-items-center bg-light vh-100">
            <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">

                <h1>Update User Details</h1>
                <form onSubmit={handleUpdate}>
                    <div className="mb-2">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={values.name} onChange={e=>setValues({...values , name: e.target.value})} />
                    </div>
                    <div className="mb-2">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleInputPassword1" value={values.email} onChange={e=>setValues({...values , email: e.target.value})} />
                    </div>
                    <div className="mb-2">
                        <label className="form-label">Phone</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" value={values.phone} onChange={e=>setValues({...values , phone: e.target.value})} />
                    </div>

                    <button className="btn btn-success">Update</button>
                    <Link to="/" className="btn btn-primary ms-3">Back</Link>
                </form>
            </div>
        </div>
    )
}

export default Update
