export default function SideNav(props) {
    return (
        <>
            <div 
                className="flex overflow-x-hidden overflow-y-auto border-r-2"
            >
                <nav>
                    <ul 
                        value="list-of-courses" 
                        className="block py-2.5 px-1.5"
                    >
                        {props.courses.map((course, id) => 
                            <li 
                                className="p-2 rounded transition 
                                duration-200 hover:bg-gray-500 hover:text-white" 
                                key={id} 
                                onClick={props.onClick} 
                                value={course}
                            >
                                {course}
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        </>
    )
}