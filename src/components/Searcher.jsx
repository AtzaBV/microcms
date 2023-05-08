import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import { getPostsByTitle } from "../helpers/getPostsByTitle";
import { Option } from "./searcher/Option";

export const Searcher = () => {
    const [searchText, setSearchText] = useState('');
    const [posts, setPosts] = useState([]);

    const navigate = useNavigate();

    const onSearchSubmit = (e) => {
        e.preventDefault();
        navigate(`blog?q=${searchText}`);
        setSearchText('');
    }

    const onSearchChange = (event) => {
        setSearchText(event.target.value);
    }

    const onSelectPost = (id) => {
        navigate(`/posts/${id}`);
        setSearchText('');
    }

    useEffect(() => {
        const result = getPostsByTitle(searchText);
        setPosts(result);
    }, [searchText])

    return (
        <>
            <div className="form-searcher-container">
                <form className="d-flex" onSubmit={ onSearchSubmit }>
                    <div className="searchInput">
                        <input className="form-control me-2"
                            type="search" 
                            placeholder="Search posts"
                            value={ searchText }
                            onChange={onSearchChange}
                        />
                    </div>
                    <button className="btn btn-success" type="submit">Search</button>
                </form>
                {
                    posts.length > 0 && 
                    <ul className="menu" >
                        {posts.map((post) => 
                            <Option key={post.id} post={post} onSelectPost={ onSelectPost } />
                        )}
                    </ul>
                }
            </div>
        </>
    )
}
