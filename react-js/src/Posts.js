import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Posts = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to={`/archives/1`}>Post 1</Link>
                </li>
                <li>
                    <Link to={`/archives/2`}>Post 2</Link>
                </li>
                <li>
                    <Link to={`/archives/3`}>Post 3</Link>
                </li>
            </ul>
        </div>
    );
};

export default Posts;