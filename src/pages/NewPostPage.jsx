import { useMemo } from "react";
import { Navigate, useNavigate, useLocation, useParams } from "react-router-dom"

import { FormPost } from "../components"
import { getPostsById } from "../helpers/getPostById";

export const NewPostPage = () => {

  const { id } = useParams();
  const post = useMemo(() =>  getPostsById(id), [id]);

  const navigate = useNavigate();
  const location = useLocation();

  const onBack = () => {
    navigate(-1);
  }

  if ( !post ) {
    const { pathname } = location;
    if ( pathname.includes('/edit')) return <Navigate to="/blog" />;
  }

  return (
    <>
      <div className="title-container d-flex justify-content-between">
        {
          id ? <h2>Edit the post</h2> : <h2>Create a new Post</h2>
        }
        <button 
          className="btn btn-danger"
          onClick={onBack}
        >
          Go Back
        </button>
      </div>
      <hr />

      <FormPost {...post}/>
    </>
  )
}
