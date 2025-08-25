import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export default async function handler(req, res) {
  const { db, max = 9 } = req.query;

  try {
    const response = await notion.databases.query({
      database_id: db,
      page_size: parseInt(max),
      sorts: [{ timestamp: "last_edited_time", direction: "descending" }],
    });

    const results = response.results.map((page) => {
      // assumes you have a "URL" property storing Instagram image link
      return {
        image: page.properties.URL?.url || "",
      };
    });

    res.status(200).json(results);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
