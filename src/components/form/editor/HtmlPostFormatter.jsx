import { useEffect, useRef, useState } from 'react';
import { Editor, EditorState, RichUtils, convertFromRaw, convertToRaw } from "draft-js";

import draftToHtml from 'draftjs-to-html';

import { BlockStyleControls } from './BlockStyleControls';
import { InlineStyleControls } from './InlineStyleControls';

import 'draft-js/dist/Draft.css';
import './css/HtmlPostFormatter.css';

export const HtmlPostFormatter = ({onChangeContent, rawContent = '', onChangeRawContent}) => {
    
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const editor = useRef(null);

    const showPreviewOnEditor = () => {
        setEditorState(EditorState.createWithContent( convertFromRaw(rawContent)));
    }

    const onInlineClick = (e) => {
        let nextState = RichUtils.toggleInlineStyle(editorState, e);
        setEditorState(nextState);
    };

    const onBlockClick = (e) => {
        let nextState = RichUtils.toggleBlockType(editorState, e);
        setEditorState(nextState);
    };

    const onChangeEditor = (state) => {
        setEditorState(() => state);
        const rawContentState = convertToRaw(state.getCurrentContent());

        onChangeRawContent(rawContentState);
        onChangeContent(draftToHtml(rawContentState));
    }

    useEffect(() => {
        if (rawContent !== '') showPreviewOnEditor();
    }, [])

    return (
        <>
            <div className='row m-0 my-4 justify-content-center'>
                <div className="col-12 RichEditor-root">
                    <div className="RichEditor-controls d-flex justify-content-center">
                        <BlockStyleControls editorState={editorState} onToggle={onBlockClick} />
                        <InlineStyleControls editorState={editorState} onToggle={onInlineClick} />
                    </div>

                    <div className="RichEditor-editor RichEditor-hidePlaceholder">
                        <Editor
                            ref={editor}
                            editorState={editorState}
                            onChange={(editorState) => onChangeEditor(editorState)}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}