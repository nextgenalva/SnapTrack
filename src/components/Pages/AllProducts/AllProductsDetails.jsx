import React from 'react'
import { useParams } from 'react-router';
import products from '../DemoProducts';

const AllProductsDetails = () => {


    const { id } = useParams();
    const product = products.find((p) => p.id === id);

    if (!product) return <div className="p-6">Product not found.</div>;

    return (
        <div className="max-w-4xl mx-auto p-6 flex">
            <div>
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full max-w-sm object-cover mb-4"
                />
                <h1 className="text-2xl font-bold">{product.name}</h1>
                <p className="text-gray-700">{product.description}</p>
                <p className="text-xl mt-2 font-semibold text-green-700">${product.price}</p>
                <p className="text-sm text-gray-500">Stock: {product.countInStock}</p>
                <p className="text-sm text-yellow-600">⭐ {product.rating} ({product.numReviews} reviews)</p>
            </div>
        </div>
    );

}

export default AllProductsDetails