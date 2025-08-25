async function loadGrid() {
  const params = new URLSearchParams(window.location.search);
  const db = params.get("db");
  const cols = params.get("cols") || 3;
  const max = params.get("max") || 9;

  const res = await fetch(`/api/notion-feed?db=${db}&max=${max}`);
  const data = await res.json();

  const grid = document.getElementById("grid");
  grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

  data.forEach(item => {
    const img = document.createElement("img");
    img.src = item.image;
    grid.appendChild(img);
  });
}

loadGrid();
