import "../css/rechercheInput.css";
import { useState, useRef } from "react";
const RechercheInput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef(null);
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleMouseEnter = () => {
    inputRef.current?.focus();
  };
  return (
    <div className="recherche-container" onMouseEnter={handleMouseEnter}>
      <label htmlFor="recherche">🔍️</label>
      <input
        ref={inputRef}
        type="text"
        id="recherche"
        className="recherche-input"
        placeholder="Recherche composant"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default RechercheInput;
