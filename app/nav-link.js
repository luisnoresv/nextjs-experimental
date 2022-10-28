'use client';

import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';
/**
 * * Nextjs 13: we can create components anyware
 */
export default function NavLink({ href, children }) {
	let segment = useSelectedLayoutSegments();
	let active = href === `/${segment}`;

	console.log({ href, active });

	return <Link href={href}>{children}</Link>;
}
