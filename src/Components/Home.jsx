/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
function Home() {

    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/users').then(res => {setData(res.data)

            console.log(res)
        }).catch(err => console.log(err))
    }, [])
    const handleDelete = (id) =>{
        const confirm = window.confirm("do you want delete this user?");
        if(confirm){
            axios.delete('http://localhost:3000/users/' +id).then( res => {
                console.log(res.data)
                location.reload();          
  }).catch(err => console.log(err))
        }
    }
    return (
        <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
            <h1>List of Users</h1>
            <div className="w-75 rounded bg-white border shadow p-4">
                <div className="d-flex justify-content-end">
                <Link to="/creat" className=" btn btn-success"> Add New User</Link>
            
            </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((d, i) => (
                                <tr key={i}>
                                    <td>{d.id}</td>
                                    <td>{d.name}</td>
                                    <td>{d.email}</td>
                                    <td>{d.phone}</td>
                                    <td>
                                        <Link to={`/read/${d.id}`}  className="btn btn-secondary me-2">View</Link>
                                        <Link to={`/update/${d.id}`} className="btn btn-primary me-2">Update</Link>
                                        <button onClick= { e => handleDelete(d.id) } type="button" className="btn btn-danger me-2">Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default Home
