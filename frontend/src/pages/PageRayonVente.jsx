import { useState, useEffect } from "react";
import ButonCategorie from "../components/ButonCategorie";
import InfoBoutique from "../components/InfoBoutique";
import RechercheInput from "../components/RechercheInput";
import LayoutRayonProduct from "../layout/LayoutRayonProduct";
import "../css/pageRayonVente.css";

const PageRayonVente = () => {
  return (
    <div>
      <InfoBoutique />
      <div className="sticky-header">
        <div className="search-wrapper">
          <RechercheInput />
        </div>
        <div className="categories-wrapper">
          <ButonCategorie />
        </div>
      </div>

      <LayoutRayonProduct />
    </div>
  );
};

export default PageRayonVente;
