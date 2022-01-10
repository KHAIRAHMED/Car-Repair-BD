import React, { useEffect, useState } from 'react';
import axios from "axios"
import Form from './../../Shared/Form/Form';
const Service = () => {
    const [service, setService] = useState({})
    const [file, setFile] = useState(null)

    const handleOnBlur = (e) => {
        const newService = { ...service }
        newService[e.target.name] = e.target.value
        setService(newService)
    }
    const handleFileChange = (e) => {
        setFile(e.target.files[0])
    }
    const handleOnSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("file", file)
        formData.append("title", service.title)
        formData.append("price", service.price)
        formData.append("description", service.description)

        axios.post('https://afternoon-mesa-42742.herokuapp.com/addService', formData)
        .then(function (response) {
            if(response.data){
                alert("Successfully Added Service")
            }
        })
        .catch(function (error) {
            alert(`Please Add again ${error}`)
        });
    }

    return (
        <section className="p-5">
            <Form handleFileChange={handleFileChange} handleOnBlur={handleOnBlur} handleOnSubmit={handleOnSubmit} isRes={true}></Form>
        </section>
    );
};

export default Service;