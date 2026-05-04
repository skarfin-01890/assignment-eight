'use client'
import Link from 'next/link';
import React from 'react';


const LoginPage = () => {

	const handleLoginfunc=(e)=>{
e.preventDefault();
const email=e.target.email.value
const passs=e.target.password.value
	}

	return (

    <div className='bg-blue-500 flex justify-center items-center min-h-screen p-4'>
        <div className='bg-white w-full max-w-md rounded-2xl shadow-xl p-8'>
            <h2 className='font-bold text-black text-3xl text-center mb-6'>
                Login with your account
            </h2>

            <form onSubmit={handleLoginfunc} className='flex flex-col gap-4'>
                <div>
                    <label className="label font-bold text-black">Email</label>
                    <input name="email" type="email" className="input  focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-red-800 input-bordered w-full" placeholder="Email" />
                </div>

                <div>
                    <label className="label font-bold text-black">Password</label>
                    <input name="password" type="password" className="input  focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-red-800 input-bordered w-full" placeholder="Password" />
                </div>

                <button className="btn btn-neutral mt-4 w-full">Login</button>

                <h2 className='text-center mt-3 text-black'>
                    Do not have account? <Link href='/register' className='text-red-600 font-semibold'>Register</Link>
                </h2>
            </form>
        </div>
    </div>
	);
};

export default LoginPage;