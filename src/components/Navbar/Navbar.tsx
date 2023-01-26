import React from 'react';
import {NavLink} from "react-router-dom";


export const PATH = {
    POSTS: '/posts',
    BLOGS: '/blogs'

}

export const Navbar = () => {
    return (
        <nav>
            <ul>
                <NavLink to={PATH.BLOGS}>
                    blogs
                </NavLink>
                <NavLink to={PATH.POSTS}>
                    posts
                </NavLink>
            </ul>

        </nav>
    );
};

