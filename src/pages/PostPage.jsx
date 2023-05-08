import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getPostsById } from "../helpers/getPostById";

export const PostPage = () => {

  const {id} = useParams();
  const post = useMemo( () => getPostsById(id), [id] );

  const navigate = useNavigate();

  const onEdit = () => {
    navigate(`/posts/edit/${id}`);
  }

  const onBack = () => {
    navigate(-1);
  }

  if ( !post ) {
    return <Navigate to="/blog" />;
  }

  return (
    <>
      <div className="row mt-4">
        <div className="title-container my-2 d-flex justify-content-between">
          <h2>{post.title}</h2>
          <div className="actions">
            <button 
              className="btn btn-primary"
              onClick={onEdit}
            >
              Edit
            </button>
            <button 
              className="btn btn-danger"
              onClick={onBack}
            >
              Go back
            </button>
          </div>
        </div>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: post.content }} ></div>
      </div>
    </>
  )
}
