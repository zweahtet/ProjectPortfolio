import Link from "next/link";

export default function SideNav(props) {
    return (
        <nav
            className="flex flex-col w-64 overflow-x-hidden overflow-y-auto border-r-2"
        >
            <ul 
                value="list-of-courses" 
                className="block py-2.5 px-1.5"
            >
                {props.navList.map((each, id) => 
                    <li 
                        className="p-2 rounded transition 
                        duration-200 hover:bg-indigo-500 hover:text-white" 
                        key={each.id} 
                        id={each.id}
                        onClick={props.onClick} 
                        value={each.title}
                    >
                        {each.title}
                    </li>
                )}
            </ul>
        </nav>
    )
}