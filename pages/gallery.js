import { useEffect, useState } from "react";

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("/api/notion-feed")
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
      {images.map((item) => (
        <img
          key={item.id}
          src={item.image}
          alt={item.caption}
          style={{ width: "100%", borderRadius: "8px" }}
        />
      ))}
    </div>
  );
}
