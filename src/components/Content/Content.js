import CategoriesList from "../CategoriesList/CategoriesList";

export default function Content(props) {
    return (
        <main className="flex flex-col w-full overflow-x-hidden overflow-y-auto py-1 px-4 text-2xl mb-14">
            <h1 className="font-bold">{props.contentHeader}</h1>
            <CategoriesList categories={props.contentCategories}/>
        </main>
    )
}