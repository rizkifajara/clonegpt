import type { NextApiRequest, NextApiResponse } from "next";
import admin from "firebase-admin";
import { adminDb } from "../../firebaseAdmin";
import query from "../../lib/queryApi";

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { prompt, chatId, model, session } = req.body;

  if (!prompt) {
    res.status(400).json({ answer: "Pesan tidak tersedia!" });
  }

  if (!chatId) {
    res.status(400).json({ answer: "ID Chat tidak tersedia!" });
  }

  if (!model) {
    res.status(400).json({ answer: "Model tidak tersedia!" });
  }

  const response = await query(prompt, chatId, model);

  const message: Message = {
    text: response || "CloneGPT was unable to find the answer!",
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: "CloneGPT",
      name: "CloneGPT",
      avatar: process.env.NEXTAUTH_URL + "/avatar.png",
    },
  };

  await adminDb
    .collection("users")
    .doc(session?.user?.email)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(message);

  res.status(200).json({ answer: message.text });
}
