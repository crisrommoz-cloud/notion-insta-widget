// pages/api/notion-feed.js

export default function handler(req, res) {
  const posts = [
    { id: 1, image: "https://placekitten.com/300/300", caption: "Cute cat 🐱" },
    { id: 2, image: "https://placekitten.com/301/301", caption: "Another cat 😻" },
    { id: 3, image: "https://placekitten.com/302/302", caption: "Yet another 🐾" },
  ];

  res.status(200).json(posts);
}
