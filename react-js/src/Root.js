import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to={`/archives`}>Posts</Link>
                </li>
            </ul>
        </div>
    );
};

export default Root;