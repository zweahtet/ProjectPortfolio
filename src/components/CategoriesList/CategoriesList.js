import Link from "next/link";

export default function CategoriesList(props) {
    return (
        <section className="max-w-6x1 mx-auto px-2.5 sm:px-2.5 lg:px-2.5 py-2.5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                { props.categories && props.categories.map((each, id) =>
                    <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
                        <div className="w-full md:w-4/5 text-left p-7 md:p-4/5 space-y-2">
                            <h3 className="text-md text-gray-700 font-bold">{each.title}</h3>
                            <p className="text-base leading-relaxed text-gray-500 font-normal">{each.category}</p>
                            <div className="flex justify-start space-x-2">
                                <Link href="/Courses/[category_id]" as={`/Courses/${each._id}`}>
                                    <a className="text-gray-500 hover:text-gray-600">Read more</a>
                                </Link>
                                
                                {/* <button 
                                    type="link" 
                                    name={each.title}
                                    className="text-gray-500 hover:text-gray-600" 
                                    onClick={props.onClick}
                                    value={each._id}
                                >
                                    Read more
                                </button> */}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}