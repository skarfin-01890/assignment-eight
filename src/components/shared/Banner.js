import React from 'react';
import shirt from '../../../public/sale.avif'
import Image from 'next/image';


const BannerPage= () => {
	return (
		<div className='mt-5  w-full h-[1100px] z-0'>
		<Image src={shirt} height="300" width="1000" alt='summer' className='w-full  object-cover h-full'></Image>
		<div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
    <h1 className="text-7xl text-amber-700 font-bold">Summer Sale</h1>
    <p className="mt-2 text-4xl text-amber-700">Enjoy <span className='font-extrabold'>50%</span> discount on the products listed below.</p>

  </div>
</div>

















	);
};

export default BannerPage
;