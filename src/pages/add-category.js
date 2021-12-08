import { useRouter } from 'next/router';
import NewCategoryForm from "../components/NewCategory/NewCategoryForm";

export default function NewCategoryPage() {
    const router = useRouter();

    async function addNewCategoryHandler(enteredNewCategoryData) {
        const response = await fetch('/api/courses', {
            method: 'POST',
            body: JSON.stringify(enteredNewCategoryData),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json();

        console.log(data);
        // after added, go back to previous page
        router.push('/courses');
    }

    return (
        <NewCategoryForm onAddCategory={addNewCategoryHandler}/>
    )
}