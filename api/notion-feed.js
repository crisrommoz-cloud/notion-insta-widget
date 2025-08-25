import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export default async function handler(req, res) {
  const { db, max = 9 } = req.query;

  try {
    // Use query param if provided, else fallback to environment variable
    const databaseId = db || process.env.NOTION_DATABASE_ID;

    if (!databaseId) {
      return res.status(400).json({ error: "Database ID is missing" });
    }

    const response = await notion.databases.query({
      database_id: databaseId,
      page_size: parseInt(max),
      sorts: [{ timestamp: "last_edited_time", direction: "descending" }],
    });

    const results = response.results.map((page) => {
      return {
        image: page.properties.URL?.url || "",
      };
    });

    res.status(200).json(results);
  } catch (e) {
    console.error("Notion API error:", e); // This will show in Vercel logs
    res.status(500).json({ error: e.message });
  }
}

