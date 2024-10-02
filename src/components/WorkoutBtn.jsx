import React from "react";
import { Link } from "react-router-dom";

export function WorkoutBtn() {
    return (
        <div>
            <Link to="/workoutroutines">
                <button type="button" className="btn btn-success btn-lg">More Workouts Plans!</button>
            </Link>
        </div>
    );
}
