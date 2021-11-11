import Category from "../components/Category/Category";
import clientPromise from "../../util/mongodb";
import { ObjectId } from "mongodb";

export default function CategoryDetails( props ) {
    return (
        <Category 
            category={props.category}
            question={props.question}
            code={props.code}
        />
    )
}

export async function getStaticPaths() {
    const client = await clientPromise
    const db = client.db("ProjectPortforlio");

    const courses = await db.collection("courses").find({}, {_id: 1}).toArray();

    return {
        fallback: false,
        paths: courses.map(course => ({ params: { category_id: course._id.toString()}}))
    }
}

export async function getStaticProps(context) {

    const category_id = context.params.category_id;

    const client = await clientPromise

    const db = client.db("ProjectPortforlio");

    const courses = db.collection("courses");

    const selectedCategory = await courses.findOne({_id: new ObjectId(category_id)});

    return {
        props: JSON.parse(JSON.stringify(selectedCategory)) 
    }
}