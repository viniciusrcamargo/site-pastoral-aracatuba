import { createClient } from "@libsql/client";

const client = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

export default async function handler(req, res) {
  if (req.method === "GET") {
    const result = await client.execute(
      "SELECT id, titulo, texto, imagem FROM posts ORDER BY id_post DESC LIMIT 5"
    );
    res.status(200).json(result.rows);
  } else {
    res.status(405).json({ error: "Método não permitido" });
  }
}