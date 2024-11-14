// pages/api/posts/[id].ts

import type { NextApiRequest, NextApiResponse } from "next";
import { getPostById, updatePost, deletePost } from "../../services/posts";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const postId = parseInt(id as string, 10);

  if (req.method === "GET") {
    try {
      const data = await getPostById(postId);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      });
    }
  } else if (req.method === "PUT") {
    const { title, content } = req.body;
    try {
      const data = await updatePost(postId, title, content);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      });
    }
  } else if (req.method === "DELETE") {
    try {
      const data = await deletePost(postId);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      });
    }
  } else {
    res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
