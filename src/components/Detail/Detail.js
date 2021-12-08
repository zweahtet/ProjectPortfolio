// import CodeDisplay from "../CodeDisplay/CodeDisplay";
import Link from 'next/link';
import { CopyBlock, dracula } from "react-code-blocks";

export default function Detail( props ) {
    return (
        <main className="flex flex-col w-full overflow-x-hidden overflow-y-auto py-1 px-4 text-2xl">
            <div className="grid grid-cols-5">
                <Link href="/Courses" className="">
                    <a>Back</a>
                </Link>
                <h1 className="font-bold col-span-3 text-center">{props.contentHeader}</h1>
            </div>
            <div className="panel-body">
                <h3 className="panel-question">
                    {props.question}
                </h3>
                <h3 className="panel-code">
                    <CopyBlock text={props.code} language="python" showLineNumbers={true} theme={dracula}/>
                </h3>
            </div>
        </main>
    )
}