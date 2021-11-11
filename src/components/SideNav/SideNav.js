export default function SideNav(props) {
    return (
        <>
            <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
                <button 
                    className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700"
                    onClick={() => sidebar.classList.toggle("-translate-x-full")}
                >Open sider</button>
            </div>
            <div 
                className="sidebar overflow-x-hidden overflow-y-auto bg-gray-800 text-white w-65 space-y-2.5 px-2.5 
                            py-5 absolute inset-y-0 left-0 transform -translate-x-full 
                            md:relative md:translate-x-0 transition duration-200 ease-in-out"
            >
                <input 
                    className="flex w-full rounded text-md text-gray-500 p-1"
                    type="text" 
                    placeholder="Filter ..."/>

                <nav>
                    <ul 
                        value="list-of-courses" 
                        className="block py-2.5 px-1.5"
                    >
                        {props.names.map((name, id) => 
                            <li className="py-2 rounded transition duration-200 hover:bg-gray-500 hover:text-white" key={id} onClick={props.onClick} value={name}>{name}</li>
                        )}
                    </ul>
                </nav>
            </div>
        </>
    )
}