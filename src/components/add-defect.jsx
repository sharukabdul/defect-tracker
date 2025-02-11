import React, { useState } from "react";
import DefectHeader from "./defect-header";
import { useNavigate } from "react-router-dom";

export default function AddDefect({ handleAddData, data }) {
    const navigate = useNavigate();
    const [defectForm, setDefectForm] = useState({
        defectCategory: "",
        description: "",
        priority: ""
    });

    const handleChange = (e) => {
        setDefectForm({
            ...defectForm,
            id: data.length+1,
            status: "open",
            changeStatus: "Close Defect",
            [e.target.name]: e.target.value
        });
    }

    const handleAddDefect = () => {
        if(defectCategory && description && priority) {
            handleAddData(defectForm);
            navigate("/view-defects");
        } else {
            alert("Please fill all the fields!");
        }
    }

    const { defectCategory, description, priority } = defectForm;
    return (
        <div className="defect-container add">
            <DefectHeader />
            <div className="login-header">
                <h5>Add Defects</h5>
            </div>
            <div className="form-container">
                <div className="form-label-container">
                    <label>Defect Category</label>
                    <select name="defectCategory" value={defectCategory} onChange={handleChange}>
                        <option>select</option>
                        <option value="UI">UI</option>
                        <option value="Functional">Functional</option>
                        <option value="Change Request">Change Request</option>
                    </select>
                </div>
                <div className="form-label-container">
                    <label>Description</label>
                    <textarea placeholder="Enter description" name="description" value={description} onChange={handleChange}></textarea>
                </div>
                <div className="form-label-container">
                    <label>Priority</label>
                    <input type="text" name="priority" value={priority} onChange={handleChange} />
                </div>
                <button onClick={handleAddDefect}>Add Defect</button>
            </div>
        </div>
    );
}