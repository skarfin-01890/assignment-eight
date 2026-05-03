import React from 'react';
import data from '@/../public/data.json';
import Image from 'next/image';
import ProductCard from './ProductCard';

const PopoularPage =async () => {
	const res=await fetch('http://localhost:3000/data.json', {cache:'no-store'})
	if (!res.ok) {
    throw new Error('Failed to fetch data');
}
	const products=await res.json();
	const top=products.slice(0,3)

	return (
		<>
		<h2 className='container mx-auto mt-5 text-6xl font-extrabold text-white-700 text-center'>Popular Products:</h2>
		<div className=' mt-7 h-96 grid grid-cols-3 space-y-3 container mx-auto'>
{
	top.map(product=> <ProductCard product={product} key={product.id}></ProductCard>)


}
		</div>
		</>
	);
};

export default PopoularPage;
