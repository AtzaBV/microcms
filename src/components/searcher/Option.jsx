import { OptionButton } from "./OptionButton"

export const Option = ({post, onSelectPost}) => {
  return (
    <li className="menu-item">
        <OptionButton post={ post } onSelectPost={onSelectPost}/>
    </li>
  )
}
