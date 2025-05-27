import React from 'react'
import products from '../DemoProducts'
import AllProductsSidebar from './AllProductsSidebar';
import { Link } from 'react-router';

const AllProducts = () => {
    return (


        <> <div className="flex flex-col md:flex-row px-4 md:px-8 py-6 gap-6">
            <div className="w-72">
                <AllProductsSidebar />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                {products.map(product => (
                    <Link to={`/product/${product.id}`} className="no-underline text-black" key={product.id}>
                        <div
                            key={product.id}
                            className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold">{product.name}</h2>
                                <p className="text-gray-600 text-sm">{product.brand}</p>
                                <p className="mt-2 text-gray-800 font-medium">${product.price}</p>
                                <p className="text-yellow-500 text-sm">⭐ {product.rating} ({product.numReviews} reviews)</p>
                                <p className="text-sm text-gray-500 mt-1">{product.description.substring(0, 60)}...</p>
                                <div className='flex justify-between mt-4'>
                                    <button className="btn btn-sm btn-outline">Details</button>
                                    {/* <button className="btn btn-sm btn-primary">Add to cart</button> */}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>

        </>


    );
};

export default AllProducts