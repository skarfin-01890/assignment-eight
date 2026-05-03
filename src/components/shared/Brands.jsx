import React from 'react';

const Brands = () => {
	return (
		<>
		<h2 className='mt-10 text-6xl font-bold text-center'>Top Brands</h2>
		<div className='container mx-auto grid grid-cols-4 gap-8 '>

			<div className="card w-96 -bg-linear-180 text-white card-lg border rounded-2xl border-blue-700 shadow-2xl mt-10 mb-11">
  <div className="card-body">
    <h2 className="card-title">Cerave</h2>
    <p className='line-clamp-3 line'>recommends using face moisturizers that are developed with dermatologists, fragrance-free, gentle on skin, allergy-tested, and non-comedogenic</p>
    <div className="justify-end card-actions">
      <button className="btn btn-primary">Visit Now</button>
    </div>
  </div>
</div>
			<div className="card w-96  -bg-linear-180 text-white card-lg border rounded-2xl border-blue-700 shadow-5xl mt-10 mb-11 ">
  <div className="card-body">
    <h2 className="card-title">EltaMD</h2>
    <p>EltaMD sunscreens are more natural than chemical sunscreens, and they're an exceptionally good choice for people with sensitive skin and those who have conditions such as acne and rosacea,” says Evelina Ingersoll, APRN, a certified advanced practice registered nurse at Water's Edge Dermatology.</p>
    <div className="justify-end card-actions">
      <button className="btn btn-primary">Visit Now</button>
    </div>
  </div>
</div>
			<div className="card w-96 -bg-linear-180 text-white card-lg border rounded-2xl border-blue-700 shadow-5xl mt-10 mb-11 ">
  <div className="card-body">
    <h2 className="card-title">Versed</h2>
    <p>When you pair effective, dermatologist-tested skincare with makeup that’s good for your skin, the result is simple: skin that looks like your own, just glowier and healthier.</p>
    <div className="justify-end card-actions">
      <button className="btn btn-primary">Visit Now</button>
    </div>
  </div>
</div>
			<div className="card w-96 -bg-linear-180 text-white card-lg border rounded-2xl border-blue-500 shadow-5xl mt-10 mb-11 ">
  <div className="card-body">
    <h2 className="card-title">Naturium</h2>
    <p>SUPPORT YOUR SKIN'S MOISTURE BARRIER WITH A SUPERFINE MIST

</p>
    <div className="justify-end card-actions">
      <button className="btn btn-primary">Visit Now</button>
    </div>
  </div>
</div>

		</div>
		</>
	);
};

export default Brands;