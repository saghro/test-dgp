import FormulaireRecherche from '../../components/FormulaireRecherche.tsx';
import Produits from '../../components/produits';
import {useState} from "react";

const HomePage = () => {
    const [prixMinimum, setPrixMinimum] = useState<number>(0);
    const [prixMaximum, setPrixMaximum] = useState<number>(100);
    const handleSearch = ({ prixMinimum, prixMaximum }: { prixMinimum: number; prixMaximum: number }) => {
        setPrixMinimum(prixMinimum);
        setPrixMaximum(prixMaximum);
    };
  return (
      <div>
          <FormulaireRecherche onSearch={handleSearch} />
          <Produits prixMinimum={prixMinimum} prixMaximum={prixMaximum} />
      </div>
  );
};

export default HomePage;
