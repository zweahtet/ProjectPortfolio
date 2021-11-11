import { useRef } from "react";

export default function NewCategoryForm( props ) {
    const categoryInputRef = useRef();
    const questionInputRef = useRef();
    const codeInputRef = useRef();
    const courseInputRef = useRef();
    const urlInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredCategory = categoryInputRef.current.value;
        const enteredQuestion = questionInputRef.current.value;
        const enteredCode = codeInputRef.current.value;
        const enteredCourse = courseInputRef.current.value;
        const enteredUrl = urlInputRef.current.value;

        const newCategory = {
            category: enteredCategory,
            question: enteredQuestion,
            code: enteredCode,
            course: enteredCourse,
            url: enteredUrl
        };
      
        props.onAddCategory(newCategory);
    }
      
    return (
        <>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor='category'>Category (linked list, tree, ...)</label>
                    <input type='text' required id='category' ref={categoryInputRef} />
                </div>
                <div>
                    <label htmlFor='question'>Question</label>
                    <textarea
                        id='question'
                        required
                        rows='5'
                        ref={questionInputRef}
                    ></textarea>
                </div>
                <div>
                    <label htmlFor='code'>Code</label>
                    <textarea
                        id='code'
                        required
                        rows='5'
                        ref={codeInputRef}
                    ></textarea>
                </div>
                <div>
                    <label htmlFor='course'>Course (cs61a, cs61b, ...)</label>
                    <input type='text' required id='course' ref={courseInputRef} />
                </div>
                <div>
                    <label htmlFor='url'>Course website (cs61a.org, ...)</label>
                    <input type='url' required id='url' ref={urlInputRef} />
                </div>
                <div>
                    <button>Add New Category</button>
                </div>
            </form>
        </>
    );
}
