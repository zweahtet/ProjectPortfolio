import clientPromise from "../../../util/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    const query = req.query.category_id;

    const client = await clientPromise
    const db = client.db("ProjectPortforlio");

    const data = await db
        .collection("courses")
        .findOne({_id: new ObjectId(query)})
        .toArray();

    res.json(data)
}