import React, { useState } from 'react';
import axios from "axios"

const AddAdmin = () => {
    const [email , setEmail] = useState(null)
    // console.log(email)

    const handleOnSubmit=(e)=>{
        e.preventDefault()
        axios.post("https://afternoon-mesa-42742.herokuapp.com/addAdmin", {email})
        .then((response)=>{
            if(response.data){
                alert("Successfully Added Admin")
            }
        })
        .catch(error=>alert(`Add again ${error}`))
        
    }
    return (
        <form className="row" onSubmit={handleOnSubmit}>
            <div className="d-flex justify-content-center mt-5">
                <div className="col-md-8 col-sm-11 col-11">
                    <div className="form-group">
                        <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter Admin Email" onBlur={event => setEmail(event.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </div>
            </div>
        </form>
    );
};

export default AddAdmin;