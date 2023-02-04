import Link from "next/link";
export default function Nav() {
	const styles = {
		nav: "p-2 pt-10 text-center  w-full  ",
		h1: "text-2xl inline-block p-1 pb-3 mx-5 text-center transition hover:text-[#D94D29] text-white  ",
	};
	const navLinks = [
		{
			name: "Testimonials",
			path: "/#testimonials",
		},
		{
			name: "About",
			path: "/#about",
		},
		{
			name: "Work",
			path: "/#work",
		},
		{
			name: "Contact",
			path: "/#contact",
		},
	];
	return (
		<nav className={styles.nav}>
			{navLinks.map((link, index) => (
				<Link
					className={styles.h1}
					key={index}
					href={link.path}
					alt={link.name}
				>
					{link.name}
					<span className="text-[#D94D29] text-4xl leading-none">
						.
					</span>
				</Link>
			))}
		</nav>
	);
}
