
export const SuccessMsg = ({showSuccess}) => {
  return (
    <div 
        className="alert alert-success" 
        style={{display: showSuccess ? '' : 'none'}}
    >
        Action succesfully
    </div>
  )
}
