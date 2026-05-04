'use client'
import React from 'react';
import { useForm } from 'react-hook-form';



const Register = () => {
	const{register,
    handleSubmit,} = useForm();
	const handleLoginfunc=async(data)=>{

const {name,email,photo,password}=data;
	}
	return (

		<div className='bg-blue-500 flex justify-center items-center min-h-screen p-4'>
		<div className='bg-white w-full max-w-md rounded-2xl shadow-xl p-8'>
			<h2 className='font-bold text-black text-3xl text-center mb-2'>Welcome to Suncart</h2>
			<h2 className='font-bold text-black text-3xl text-center mb-6'>Sign Up Please</h2>
			<form onSubmit={handleSubmit(handleLoginfunc)} className='flex flex-col gap-4'>
			<div>
                    <label className="label font-bold text-black">Your Name</label>
                    <input name="name" type="text" className="input  focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-red-800 input-bordered w-full" placeholder="Name" />
                </div>

                <div>
                    <label className="label font-bold text-black">Photo URL</label>
                    <input  name="photo" type="text" className="  focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-red-800


                input input-bordered w-full" placeholder="URL" />
                </div>
                <div>
                    <label className="label font-bold text-black">Email</label>
                    <input name="Email" type="Email" className="input  focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-red-800 input-bordered w-full" placeholder="Email" />
                </div>
                <div>
                    <label className="label font-bold text-black">Password</label>
                    <input name="password" type="password" className="input  focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-red-800 input-bordered w-full" placeholder="Password" />
                </div>

                <button className="btn btn-neutral mt-4 w-full">Continue</button>

			</form>

		</div>

		</div>
	);


	}
	export default Register;
