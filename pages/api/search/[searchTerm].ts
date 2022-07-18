import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../../utils/client";
import { searchPostsQuery } from "../../../utils/queries";

// console.log("%cindex.ts line:6 client.", "color: #007acc;", client.token);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { searchTerm } = req.query;

    const videosQuery = searchPostsQuery(searchTerm);

    const videos = await client.fetch(videosQuery);

    res.status(200).json(videos);
  }
}
