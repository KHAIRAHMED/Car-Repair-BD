import React from 'react';

const Form = ({ handleOnSubmit, handleOnBlur, handleFileChange, isRes }) => {

    return (
        <form onSubmit={handleOnSubmit} className="row g-3 justify-content-center p-3" style={{ background: "white", borderRadius: "10px" }}>
            <div className="col-md-10">
                <input type="text" name={isRes ? "title" : "city"} onBlur={handleOnBlur} className="form-control text-uppercase" placeholder={isRes ? "Enter Service Title" : "Where Are You From (City)"} required />
            </div>
            <div className="col-md-10">
                <textarea className="form-control" placeholder={isRes ? "Enter Description" : "Review"} onBlur={handleOnBlur} rows="8" name={isRes ? "description" : "review"}></textarea>
            </div>
            {
                isRes && <>
                    <div className="col-md-10">
                        <input type="number" name="price" onBlur={handleOnBlur} className="form-control" placeholder="Enter Service Price" required />
                    </div>
                    <div className="mb-3 col-md-10">
                        <label className="text-secondary">Upload Image</label>
                        <input type="file" onChange={handleFileChange} className="form-control" aria-label="file example" required />
                    </div>
                </>

            }

            <div className="col-10 mb-3">
                <button className="btn btn-primary" type="submit">Add Service</button>
            </div>
        </form>
    );
};

export default Form;