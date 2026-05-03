'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({href,children,className}) => {
	const pathName=usePathname();
	const isActive=href===pathName;
	return (
		<Link href={href}className={`px-3 py-1 rounded-xl text-xl inline-flex items-center gap-2   ${isActive? " bg-orange-700 border-b    text-white":"bg-orange-700 text-black"}`}>{children}</Link>
	);
};

export default Navlink;