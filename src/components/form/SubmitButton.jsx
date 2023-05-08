
export const SubmitButton = ({id}) => {
  return (
    id !== '' ?
    <button type="submit" className="btn btn-primary">Edit</button> 
    :
    <button type="submit" className="btn btn-primary">Create</button>
  )
}
