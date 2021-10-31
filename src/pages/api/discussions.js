// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default handler;
const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
  // switch the methods
    switch (req.method) {
        case 'GET': {
            return getDiscussions(req, res);
        }

        case 'POST': {
            return addDiscussion(req, res);
        }

        case 'PUT': {
            return updateDiscussion(req, res);
        }

        case 'DELETE': {
            return deleteDiscussion(req, res);
        }
    }
}

async function getDiscussions(req,res){
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        // fetch the discussions
        let discussions = await db
            .collection('discussions')
            .find({})
            .sort({ published: -1 })
            .toArray();
        // return the discussions
        return res.json({
            message: JSON.parse(JSON.stringify(discussions)),
            success: true,
        });
    } catch (error) {
        // return the error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}