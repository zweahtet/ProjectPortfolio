import { useRef } from "react";

export default function NewCategoryForm( props ) {
    const categoryInputRef = useRef();
    const titleInputRef = useRef();
    const questionInputRef = useRef();
    const codeInputRef = useRef();
    const courseInputRef = useRef();
    const urlInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredCategory = categoryInputRef.current.value;
        const enteredTitle = titleInputRef.current.value;
        const enteredQuestion = questionInputRef.current.value;
        const enteredCode = codeInputRef.current.value;
        const enteredCourse = courseInputRef.current.value;
        const enteredUrl = urlInputRef.current.value;

        const newCategory = {
            category: enteredCategory,
            title: enteredTitle,
            question: enteredQuestion,
            code: enteredCode,
            course: enteredCourse,
            url: enteredUrl
        };
      
        props.onAddCategory(newCategory);
    }
    
    return (
        <>        
            <div class="py-12">
                <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div class="p-6 bg-white border-b border-gray-200">
                            <form id="newCategoryForm" method="POST" onSubmit={submitHandler}>
                                <div class="mb-4">
                                    <label class="text-xl text-gray-600">Category (linked list, tree, ...) <span class="text-red-500">*</span></label><br/>
                                    <input type="text" class="border-2 border-gray-300 p-2 w-full text-black" name="category" id="category" required ref={categoryInputRef}/>
                                </div>

                                <div class="mb-4">
                                    <label class="text-xl text-gray-600">Title <span class="text-red-500">*</span></label><br/>
                                    <input type="text" class="border-2 border-gray-300 p-2 w-full text-black" name="title" id="title" required ref={titleInputRef}/>
                                </div>

                                <div class="mb-4">
                                    <label class="text-xl text-gray-600">Course <span class="text-red-500">*</span></label><br/>
                                    <input type="text" class="border-2 border-gray-300 p-2 w-full text-black" name="course" id="course" required ref={courseInputRef}/>
                                </div>

                                <div class="mb-4">
                                    <label class="text-xl text-gray-600">URL <span class="text-red-500">*</span></label><br/>
                                    <input type="url" class="border-2 border-gray-300 p-2 w-full text-black" name="url" id="url" required ref={urlInputRef}/>
                                </div>

                                <div class="mb-8">
                                    <label class="text-xl text-gray-600">Question <span class="text-red-500">*</span></label><br/>
                                    <textarea class="border-2 border-gray-500 p-2 w-full text-black" name="question" id="question" required ref={questionInputRef}/>
                                </div>

                                <div class="mb-8">
                                    <label class="text-xl text-gray-600">Code <span class="text-red-500">*</span></label><br/>
                                    <textarea  class="border-2 border-gray-500 p2 w-full text-black" name="code" id="code" required ref={codeInputRef}/>
                                </div>

                                <div class="flex p-1">
                                    {/* <select class="border-2 border-gray-300 border-r p-2" name="action">
                                        <option>Save and Publish</option>
                                        <option>Save Draft</option>
                                    </select> */}
                                    <button role="submit" class="p-3 bg-blue-500 text-white hover:bg-blue-400" required>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
