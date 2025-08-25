import { useEffect, useState } from "react";

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("/api/notion-feed?db=25a92299d51b80399ba1cf442c77a21e")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
      gap: "10px",
      padding: "20px"
    }}>
      {images.map((item, i) => (
        <img
          key={i}
          src={item.image}
          alt="Notion media"
          style={{ width: "100%", borderRadius: "8px" }}
        />
      ))}
    </div>
  );
}
