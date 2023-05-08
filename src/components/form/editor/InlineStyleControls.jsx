import { StyleButton } from "./StyleButton";

const INLINE_STYLES = [
    { label: "Bold", style: "BOLD" },
    { label: "Italic", style: "ITALIC" },
    { label: "Underline", style: "UNDERLINE" },
    { label: "Monospace", style: "CODE" }
];

export const InlineStyleControls = (props) => {
    
    const currentStyle = props.editorState.getCurrentInlineStyle();

    return (
        <div>
            {INLINE_STYLES.map((type) => (
            <StyleButton
                key={type.label}
                label={type.label}
                active={currentStyle.has(type.style)}
                onToggle={props.onToggle}
                style={type.style}
            />
            ))}
        </div>
    )
}
