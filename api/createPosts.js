import { createClient } from "@libsql/client";

const client = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { titulo, texto, imagem } = req.body;

    await client.execute({
      sql: "INSERT INTO posts (titulo, texto, imagem) VALUES (?, ?, ?)",
      args: [titulo, texto, imagem],
    });

    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ error: "Método não permitido" });
  }
}