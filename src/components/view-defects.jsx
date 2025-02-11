import React, { useState } from "react";
import DefectHeader from "./defect-header";

export default function ViewDefects({ data, handleCloseDefectProps }) {
    const [priority, setPriority] = useState("all");
    const [category, setCategory] = useState("all");

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    }

    const handlePriorityChange = (e) => {
        setPriority(e.target.value);
    }

    const handleCloseDefect = (id) => {
        handleCloseDefectProps(id);
    }

    return (
        <div className="defect-container">
            <DefectHeader />
            <div className="filter-details-container">
                <h1 className="defect-sub-header">Filter Details</h1>
                <div className="priority-container">
                    <h4>Priority</h4>
                    <select value={priority} onChange={handlePriorityChange}>
                        <option value="all">All</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
                <div className="priority-container">
                    <h4>Category</h4>
                    <select value={category} onChange={handleCategoryChange}>
                        <option value="all">All</option>
                        <option value="open">open</option>
                        <option value="closed">closed</option>
                    </select>
                </div>
            </div>
            <div className="defect-details">
                <h1 className="defect-sub-header">Defect Details</h1>
                <span className="search-results">Search Results: {data.length}</span>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Defect Category</th>
                        <th>Description</th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th>Change Status</th>
                    </tr>
                </thead>
                {data.filter((item) => (category === "all" || item.status === category) && (priority === "all" || item.priority === priority)).map((defect) => {
                    return (
                        <tbody key={defect.id}>
                            <tr>
                                <td>{defect.defectCategory}</td>
                                <td>{defect.description}</td>
                                <td>{defect.priority}</td>
                                <td>{defect.status}</td>
                                <td>
                                    {defect.changeStatus === "Close Defect" ? (
                                        <a onClick={() => handleCloseDefect(defect.id)}>Close Defect</a>
                                    ) : (
                                        <span className="no-action-pending">{defect.changeStatus}</span>
                                    )}
                                </td>
                            </tr>
                        </tbody>
                    );
                })}
            </table>
        </div>
    );
}