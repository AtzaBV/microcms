import { Link } from "react-router-dom"

export const PostCard = ({id, title, content}) => {

  return (
    <div className="card my-2">
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text" dangerouslySetInnerHTML={{__html: `${content.substring(0,200)}...`}}></p>
            <Link to={`/posts/${id}`}>
                More...
            </Link>
        </div>
    </div>
  )
}
