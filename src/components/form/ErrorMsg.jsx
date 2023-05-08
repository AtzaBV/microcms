
export const ErrorMsg = ({showError}) => {
  return (
    <div 
        className="alert alert-danger" 
        style={{display: showError ? '' : 'none'}}
    >
        Fields cannot be empty
    </div>
  )
}
