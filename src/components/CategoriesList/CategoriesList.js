import Link from "next/link";

export default function CategoriesList({categories}) {
    return (
        <section className="max-w-6x1 mx-auto px-2.5 sm:px-2.5 lg:px-2.5 py-2.5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                { categories && categories.map((each, id) =>
                    <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
                        <div className="w-full md:w-4/5 text-left p-7 md:p-4/5 space-y-2">
                            <h3 className="text-md text-gray-700 font-bold">{each.category}</h3>
                            <p className="text-base leading-relaxed text-gray-500 font-normal">a list of problem titles goes here</p>
                            <div className="flex justify-start space-x-2">
                                <Link href={"/".concat(each._id)}>
                                    <button type="link" className="text-gray-500 hover:text-gray-600">Read more</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}