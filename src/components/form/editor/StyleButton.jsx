
export const StyleButton = (props) => {
    const onClickButton = (e) => {
        e.preventDefault();
        props.onToggle(props.style);
    };

    return <button 
            type="button" 
            className={`RichEditor-styleButton ${props.active ? "RichEditor-activeButton" : ""}`}
            onMouseDown={onClickButton}
            >
                {props.label}
            </button>;
}
