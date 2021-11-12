import CategoriesList from "../CategoriesList/CategoriesList";
import Link from 'next/link';

export default function Content(props) {
    return (
        <main className="flex flex-col w-full overflow-x-hidden overflow-y-auto py-1 px-4 text-2xl mb-14">
            <div className="flex justify-between">
                <h1 className="font-bold">{props.contentHeader}</h1>
                <Link href="/new-category">Add Problem</Link>
            </div>
            <CategoriesList categories={props.contentCategories}/>
        </main>
    )
}