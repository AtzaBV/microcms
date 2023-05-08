import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { getAllPosts } from "../helpers/getAllPosts"
import { PostCard } from "./PostCard"
import { getPostsByTitle } from "../helpers/getPostsByTitle";


export const PostList = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const { q = '' } = queryString.parse(location.search);
  const posts = !q ? getAllPosts() : getPostsByTitle(q);

  const navigateToNewPost = () => {
    navigate('/posts/new');
  }

  return (
    <>
    <div className="postlist-container">
        <div className="title-container d-flex justify-content-between">
            <h3>Posts List</h3>
            <button 
              className="btn btn-primary"
              onClick={navigateToNewPost}
            >
                + Add Post
            </button>
        </div>
        <hr />

        { posts.map(post => <PostCard key={post.id} {...post}/>) }
    </div>

        
    </>
  )
}
