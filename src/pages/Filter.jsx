import React from "react";
import { Card } from "../components/card/Card";
import "./Filter.css";
import { ItemFilter } from "../components/itemFilter/ItemFilter";
// Você provavelmente pode remover qualquer importação de CSS aqui

export const Filter = () => {
  return (
    <div className="container-all-filter">
      <div className="container-filter-cards">
        <div className="sidebar">
          <h3>Pesquisar por: </h3>

          <h4>Marca</h4>

          <div className="dflex">
            <input type="checkbox" name="brand" id="nike-brand" />
            <label htmlFor="nike-brand">Nike</label>
          </div>

          <div className="dflex">
            <input type="checkbox" name="brand" id="adidas-brand" />
            <label htmlFor="adidas-brand">Adidas</label>
          </div>

          <div className="dflex">
            <input type="checkbox" name="brand" id="puma-brand" />
            <label htmlFor="puma-brand">Puma</label>
          </div>

          <div className="dflex">
            <input type="checkbox" name="brand" id="reebok-brand" />
            <label htmlFor="reebok-brand">Reebok</label>
          </div>

          {/* --- Filtro por Categoria --- */}
          <h4>Categorias</h4>

          <div className="dflex">
            <input type="checkbox" name="category" id="shoes-category" />
            <label htmlFor="shoes-category">Calçados</label>
          </div>

          <div className="dflex">
            <input type="checkbox" name="category" id="apparel-category" />
            <label htmlFor="apparel-category">Vestuário</label>
          </div>

          <div className="dflex">
            <input type="checkbox" name="category" id="accessories-category" />
            <label htmlFor="accessories-category">Acessórios</label>
          </div>

          <div className="dflex">
            <input type="checkbox" name="category" id="sportswear-category" />
            <label htmlFor="sportswear-category">Esportivo</label>
          </div>
        </div>

        <button className="btn-filter--icone">
          <i className="fa-solid fa-filter"></i>
        </button>
        <div className="container-cards-products">
          <Card />
        </div>
      </div>
    </div>
  );
};
