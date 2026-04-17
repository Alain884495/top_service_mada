import { useState } from "react";
import "../css/butonCategorie.css";

const categories = [
  { icone: "📦", name: "Tous" },
  { icone: "💳", name: "Cartes" },
  { icone: "📡", name: "Capteurs" },
  { icone: "⚙️", name: "Moteurs" },
  { icone: "🖥️", name: "Écrans" },
  { icone: "🧩", name: "Modules" },
  { icone: "⚡", name: "Composants" },
  { icone: "🛠️", name: "Outils" },
];

const ButonCategorie = ({ onCategoryChange }) => {
  const [selected, setSelected] = useState("Tous");

  const handleClick = (cat) => {
    setSelected(cat);
    onCategoryChange?.(cat);
  };

  return (
    <div className="categories-container">
      {categories.map((cat) => (
        <button
          key={cat.name}
          className={`category-btn ${selected === cat.name ? "active" : ""}`}
          onClick={() => handleClick(cat.name)}
        >
          <span className="category-icon">{cat.icone}</span>
          <span className="category-text">{cat.name}</span>
        </button>
      ))}
    </div>
  );
};

export default ButonCategorie;
