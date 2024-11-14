import type { NextApiRequest, NextApiResponse } from "next";
import { createPost, getPosts } from "../../services/posts";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { title, content } = req.body;
    try {
      const data = await createPost(title, content);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  } else if (req.method === "GET") {
    try {
      const data = await getPosts();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  } else {
    res.setHeader("Allow", ["POST", "GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
