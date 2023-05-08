
export const InputTitle = ({inputTitle, onChangeTitle}) => {
  return (
    <input 
        type="text" 
        className="form-control" 
        value={inputTitle}
        onChange={onChangeTitle}
    />
  )
}
