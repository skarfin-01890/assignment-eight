import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const DetailsPage = async({params}) => {
	const {id}= await params;

	const res=await fetch('http://localhost:3000/data.json', {cache:'no-store'})
	if (!res.ok) {
    throw new Error('Failed to fetch data');
}
	const products=await res.json();
	const product=products.find(p=>p.id==id)

	return (
		<div className='container mx-auto mt-30'>
		<div className="card  bg-red-600 rounded-2xl  card-side h-100 w-[80%] shadow-sm">
  <figure>
     <Image src={product.image} alt='summer image' width={1000} height={1000} className='w-full'></Image>
  </figure>
  <div className="">
    <h2 className="text-3xl font-bold mt-20 mb-3 px-2 text-black">Product Name: {product.name}</h2>
    <p className='text-3xl font-bold px-2 text-black mb-5'>Brand: {product.brand}</p>
	<p className='text-xl text-black line-clamp-1px-2 mt-2 mb-3 px-2 font-bold'>{product.description}</p>
	<p className='text-xl text-black text-xl mt-2 mb-3 px-2 font-bold'>Category:{product.category}</p>

	<div className='flex justify-between text-2xl text-black px-2 font-bold'>
		<p>Price: {product.price}</p>
		<p>Rating: {product.rating}</p>
		<p>Stock:{product.stock}</p>
		</div>

<div className='flex justify-center mt-5'>
    <Link href='/'>
        <button className='btn bg-black text-white border hover:bg-cyan-800 rounded-xl border-red-600 px-10'>
            Back
        </button>
    </Link>
</div>


  </div>
</div>
</div>
	);
};

export default DetailsPage;