import React from "react";
import { Link } from "react-router-dom";

export default function DefectHeader() {

    const handleLogout = () => {
        localStorage.removeItem("user");
    }
    
    const user = localStorage.getItem("user");
    return (
        <div>
            <h1 className="defect-tracker-title">Defect Tracker</h1>
            <Link to="/" onClick={handleLogout}><>Logout</></Link>
            <div className="add-view-header">
                {user === "Tester" &&
                    <Link to="/add-defect"><>Add Defect</></Link>}
                <Link to="/view-defects"><>View Defects</></Link>
            </div>
        </div>
    );
}