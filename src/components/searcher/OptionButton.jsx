
export const OptionButton = ({post, onSelectPost}) => {
  return (
    <button onClick={() => onSelectPost(post.id)}>{ post.title }</button>
  )
}
