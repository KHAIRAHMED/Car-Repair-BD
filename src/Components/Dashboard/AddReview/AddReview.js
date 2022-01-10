import React, { useContext, useState } from 'react';
import axios from "axios"
import Form from '../../Shared/Form/Form';
import { userContext } from '../../../App';
const AddReview = () => {
    const [reviewInfo, setReviewInfo] = useState({})
    const[userLoggedIn] = useContext(userContext)
    const {displayName , photoURL} = userLoggedIn

    const handleOnBlur = (e) => {
        const newReviewInfo = { ...reviewInfo }
        newReviewInfo[e.target.name] = e.target.value
        setReviewInfo(newReviewInfo)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const review = {
            name : displayName,
            img : photoURL,
            review : reviewInfo.review,
            city: reviewInfo.city,
        }

        axios.post('https://afternoon-mesa-42742.herokuapp.com/addReview', review)
        .then(function (response) {
            if(response.data){
                alert("Successfully Added Review")
            }
        })
        .catch(function (error) {
            alert(`Please Add again ${error}`)
        });
    }

    return (
        <section className="p-5">
            <Form  handleOnBlur={handleOnBlur} handleOnSubmit={handleOnSubmit} isRes={false}></Form>
        </section>
    );
};

export default AddReview;