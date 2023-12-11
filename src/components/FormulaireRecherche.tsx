import { useState } from 'react';
import toast from 'react-hot-toast';

interface FormulaireProps {
  onSearch: (values: { prixMinimum: number; prixMaximum: number }) => void;
}
const FormulaireRecherche: React.FC<FormulaireProps> = ({ onSearch }) => {
  const [totalProduits, setTotalProduits] = useState<number>(10);
  const [prixMinimum, setPrixMinimum] = useState<number>(0);
  const [prixMaximum, setPrixMaximum] = useState<number>(100);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch({ prixMinimum, prixMaximum });

    if (totalProduits <= 0) {
      toast.error('Le nombre de produits doit être supérieur à 0');
      return;
    }

    if (prixMinimum < 0 || prixMaximum < 0) {
      toast.error('Les prix ne peuvent pas être négatifs');
      return;
    }

    if (prixMaximum < prixMinimum) {
      toast.error('Le prix maximum ne peut pas être inférieur au prix minimum');
      return;
    }

    // Logique de recherche ici
  };


  const handlePrixMinChange = (value: string) => {
    const parsedValue = parseInt(value, 10);
    if (!isNaN(parsedValue)) {
      if (parsedValue >= 0) {
        setPrixMinimum(parsedValue);
      } else {
        toast.error('Veuillez saisir un nombre positif pour le prix minimum');
      }
    } else {
      toast.error('Veuillez saisir un nombre valide pour le prix minimum');
    }
  };

  const handleTotalProduitsChange = (value: string) => {
    const parsedValue = parseInt(value, 10);
    if (!isNaN(parsedValue)) {
      if (parsedValue >= 0) {
        setTotalProduits(parsedValue);
      } else {
        toast.error('Veuillez saisir un nombre positif pour le nombre de produits');
      }
    } else {
      toast.error('Veuillez saisir un nombre valide pour le nombre de produits');
    }
  };


  const handlePrixMinDecrease = () => {
    if (prixMinimum - 10 >= 0) {
      setPrixMinimum(prixMinimum - 10);
    } else {
      toast.error('Le prix minimum ne peut pas être inférieur à 0');
    }
  };

  const handlePrixMaxDecrease = () => {
    if (prixMaximum - 10 >= 0) {
      setPrixMaximum(prixMaximum - 10);
    } else {
      toast.error('Le prix maximum ne peut pas être inférieur à 0');
    }
  };

  // Fonction pour gérer le changement du prix maximum
  const handlePrixMaxChange = (value: string) => {
    const parsedValue = parseInt(value, 10);
    if (!isNaN(parsedValue)) {
      if (parsedValue >= 0) {
        setPrixMaximum(parsedValue);
      } else {
        toast.error('Veuillez saisir un nombre positif pour le prix maximum');
      }
    } else {
      toast.error('Veuillez saisir un nombre valide pour le prix maximum');
    }
  };
  return (
      <div className="flex items-center bg-gray-100 text-gray-900 p-4">
        <form className="flex space-x-24 items-center justify-center flex-1" onSubmit={handleSearch}>
          <div className="flex space-x-4 items-center">
            <label className="font-lg font-bold" htmlFor="totalProduits">
              Nombre de produits :{' '}
            </label>
            <input
                type="number"
                value={totalProduits}
                onChange={(e) => handleTotalProduitsChange(e.target.value)}
                id="totalProduits"
                className="h-8 rounded-md w-24 text-black text-xl font-semibold text-center"
                name="totalProduits"
            />
          </div>
          <div className="flex space-x-20">
            <div className="flex space-x-1 items-center">
              <label className="font-lg font-bold" htmlFor="prixMinimum">
                Prix minimum
              </label>
              <button
                  className="w-8 h-8 bg-orange-400 text-xl rounded-md font-extrabold"
                  type="button"
                  onClick={handlePrixMinDecrease}
              >
                -
              </button>
              <input
                  type="number"
                  id="prixMinimum"
                  value={prixMinimum}
                  onChange={(e) => handlePrixMinChange(e.target.value)}
                  className="h-8 rounded-md bg-white w-24 p-2 text-xl text-center"
                  name="prixMinimum"
              />
              <button
                  className="w-8 h-8 bg-orange-500 text-xl rounded-md font-extrabold"
                  type="button"
                  onClick={() => setPrixMinimum(prixMinimum + 10)}
              >
                +
              </button>
            </div>
            <div className="flex space-x-1 items-center">
              <label className="font-lg font-bold" htmlFor="prixMaximum">
                Prix Maximum
              </label>
              <button
                  className="w-8 h-8 bg-orange-400 text-2xl rounded-md font-extrabold"
                  type="button"
                  onClick={handlePrixMaxDecrease}
              >
                -
              </button>
              <input
                  type="number"
                  id="prixMaximum"
                  value={prixMaximum}
                  onChange={(e) => handlePrixMaxChange(e.target.value)}
                  className="h-8 bg-white rounded-md w-24 p-2 text-xl text-center "
                  name="prixMaximum"
              />
              <button
                  className="w-8 h-8 bg-orange-500 text-2xl rounded-md font-extrabold"
                  type="button"
                  onClick={() => setPrixMaximum(prixMaximum + 10)}
              >
                +
              </button>
            </div>
          </div>

          <input
              className="px-4 cursor-pointer font-bold py-1 text-white text-xl bg-green-600 rounded-lg"
              value="Rechercher"
              type="submit"
          />
        </form>
      </div>
  );
};

export default FormulaireRecherche;
