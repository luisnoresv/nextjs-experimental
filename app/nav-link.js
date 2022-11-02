'use client';

import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';
/**
 * * Nextjs 13: we can create components anyware
 */
export default function NavLink({ href, children }) {
	const segment = useSelectedLayoutSegments();
	const active = href === `/${segment}`;

	return <Link href={href}>{children}</Link>;
}
