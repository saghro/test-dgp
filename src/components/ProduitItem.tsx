import React from "react";

interface ProductItemProps {
    product: Product;
}

const ProduitItem: React.FC<ProductItemProps> = ({ product }) => {
    return (
        <div className="flex flex-col space-y-2 bg-gray-50 p-4 drop-shadow-lg shadow-lg rounded-md">
            <div className="text-xl h-32 text-gray-800 text-center font-extrabold">
                {product?.title}
            </div>
            <img
                src={product?.image}
                className="w-full h-56 object-contain rounded-md mb-4"
                alt={product?.title}
            />

            <div className="flex items-center justify-between">
                <div className="text-2xl text-orange-500 font-extrabold">
                    {product?.price}€
                </div>
                <div className="text-md text-blue-800 font-extrabold">
                    avis : {product?.rating.rate} / 5
                </div>
            </div>
        </div>
    );
};

export default ProduitItem;
