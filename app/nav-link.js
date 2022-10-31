'use client';

import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';
/**
 * * Nextjs 13: we can create components anyware
 */
export default function NavLink({ href, children }) {
	// Get the canonical segment path from the current level to the leaf node.
	let segment = useSelectedLayoutSegments();
	let active = href === `/${segment}`;

	console.log({ href, active });

	return <Link href={href}>{children}</Link>;
}
