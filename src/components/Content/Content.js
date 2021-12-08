import CategoriesList from "../CategoriesList/CategoriesList";
import Category from "../Detail/Detail";
import Link from 'next/link';

export default function Content(props) {
    return (
        <main className="flex flex-col w-full overflow-x-hidden overflow-y-auto py-1 px-4 text-2xl">
            <div className="flex justify-center">
                <h1 className="font-bold">{props.contentHeader}</h1>
            </div>
            {/* <Link href="/add-category">Add Problem</Link> */}
            {/* (props.selectedDetail)? 
                <Detail
                    body = {props.contentBody}
                />
            : */}
            <CategoriesList 
                categories={props.contentBody} 
                // onClick={props.onClick}
            />
        </main>
    )
}