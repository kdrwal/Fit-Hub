import React from "react";
import { Link } from "react-router-dom";

export function ContactBtn() {
    return (
        <div>
            <Link to="/contact">
                <button type="button" className="btn btn-success btn-lg"> Check now!</button>
            </Link>
        </div>
    );
}
