// Produits.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProduitItem from "./ProduitItem"; // Assurez-vous d'ajuster le chemin d'importation

interface ProduitsProps {
  prixMinimum: number;
  prixMaximum: number;
}

interface Product {
  title: string;
  price: number;
  image: string;
  rating: {
    rate: number;
  };
}

const Produits: React.FC<ProduitsProps> = ({ prixMinimum, prixMaximum }) => {
  const [produits, setProduits] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProduits = async () => {
      try {
        const response = await axios.get<Product[]>(
            "https://fakestoreapi.com/products?limit=12"
        );
        let filteredProducts: Product[] = response.data;

        filteredProducts = filteredProducts.filter(
            (produit) =>
                produit.price >= prixMinimum && produit.price <= prixMaximum
        );

        filteredProducts.sort((a, b) => b.price - a.price);

        setProduits(filteredProducts);
      } catch (error) {
        console.error("Erreur de récupération des produits :", error);
      }
    };

    fetchProduits();
  }, [prixMinimum, prixMaximum]);

  return (
      <div>
        <div className="flex justify-end pr-12 pt-6">
          <form>
            <select className="px-2 border border-black text-black text-xl">
              <option>Trier par :</option>
              <option value="1">Prix croissant</option>
              <option value="2">Prix décroissant</option>
            </select>
          </form>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-16">
          {produits.map((produit, index) => (
              <ProduitItem key={index} product={produit} />
          ))}
        </div>
      </div>
  );
};

export default Produits;
