import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductCard = ({product}) => {

	return (
		<div className="card bg-orange-700 border rounded-xl w-80 shadow-sm mt-6">

  <figure  className='relative w-full aspect-square'>
    <Image src={product.image}  sizes="(max-width: 768px) 100vw,(max-width-1200px) 50vw,33vw" alt='summer product'  fill className='rounded-4xl '></Image>
  </figure>
  <div className="">
    <h2 className="mt-5 text-white text-xl font-bold p-2 line-clamp-1">Product Name: {product.name}</h2>
    <p className='text-white  font-bold px-2'>Price: ${product.price}</p>
	<p className='font-bold px-2'>Rating: {product.rating}</p>
    <div className="justify-center text-center items-center">
      <button className="btn bg-black py-5 px-7 font-bold mt-1 mb-2"><Link href={`/details/${product.id}`}>Show Details</Link></button>
    </div>
  </div>
  </div>

	);
};

export default ProductCard;