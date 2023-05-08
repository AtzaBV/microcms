import { useState } from "react"
import { createNewPost } from "../../helpers/createNewPost";
import { editPost } from "../../helpers/editPost";
import { HtmlPostFormatter } from "./editor/HtmlPostFormatter";
import { SubmitButton } from "./SubmitButton";
import { InputTitle } from "./InputTitle";
import { ErrorMsg } from "./ErrorMsg";
import { SuccessMsg } from "./SuccessMsg";

export const FormPost = ({title = '', content = '', rawContent = '', id = ''}) => {

    const [inputTitle, setInputTitle] = useState(title);
    const [inputContent, setInputContent] = useState(content);
    const [inRawContent, setInRawContent] = useState(rawContent);
    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        setShowError(false);
        if (inputTitle === '' || inputContent === '') {
            setShowError(true);
            return
        }

        const post = {
            id,
            title: inputTitle, 
            content: inputContent, 
            rawContent: inRawContent
        }

        let response;
        if (id !== '') {
            response = editPost(post);
        } else {
            response = createNewPost(post);
        }

        if (response.status === 'success') {
            setShowSuccess(true);
        }
    };

    const onChangeTitle = (e) => {
        setInputTitle(e.target.value);
    }

    const onChangeContent = (preview) => {
        setInputContent(preview);
    }

  return (
    <>
        <ErrorMsg showError={showError}/>
        <SuccessMsg showSuccess={showSuccess}/>

        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label className="form-label">Post Title</label>
                <InputTitle inputTitle={inputTitle} onChangeTitle={onChangeTitle}/>
            </div>

            <HtmlPostFormatter
                rawContent={inRawContent}
                onChangeContent={onChangeContent}
                onChangeRawContent={setInRawContent} 
            />

            <SubmitButton id={id} />
        </form>
    </>
  )
}
