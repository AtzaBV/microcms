import { StyleButton } from "./StyleButton"

const BLOCK_TYPES = [
    { label: "H1", style: "header-one" },
    { label: "H2", style: "header-two" },
    { label: "H3", style: "header-three" },
    { label: "H4", style: "header-four" },
    { label: "H5", style: "header-five" },
    { label: "H6", style: "header-six" },
    { label: "Blockquote", style: "blockquote" },
    { label: "UL", style: "unordered-list-item" },
    { label: "OL", style: "ordered-list-item" },
    { label: "Code Block", style: "code-block" }
];

export const BlockStyleControls = (props) => {
    const { editorState } = props;

    const selection = editorState.getSelection();
    const blockType = editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType();

    return (
        <div>
            {BLOCK_TYPES.map((type) => (
            <StyleButton
                key={type.label}
                label={type.label}
                active={type.style === blockType}
                onToggle={props.onToggle}
                style={type.style}
            />
            ))}
        </div>
    )
}
