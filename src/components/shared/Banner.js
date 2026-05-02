import React from 'react';
import shirt from '../../../public/sale.avif'
import Image from 'next/image';


const BannerPage= () => {
	return (
		<div className='mt-5  w-full h-[1100px]'>
		<Image src={shirt} height="300" width="1000" alt='summer' className='w-full  object-cover h-full'></Image>
		<div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
    <h1 className="text-7xl text-amber-700 font-bold">Summer Sale</h1>
    <p className="mt-2 text-4xl text-amber-700">Enjoy <span className='font-extrabold'>50%</span> discount on the products listed below.</p>
<div className="card bg-amber-700 w-96 shadow-sm absolute mt-6  bottom-60 left-10 z-10 ">

  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>











  </div>





  </div>





	);
};

export default BannerPage
;