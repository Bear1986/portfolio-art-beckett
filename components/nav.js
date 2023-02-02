import Link from "next/link";
export default function Nav() {
  const styles = {
    nav: "absolute flex hover:m-2 transition-all w-[full]  h-[4rem] ",
    h1: "text-3xl font-bold p-1 pb-3 ml-10 text-center hover:text-[#D94D29]  hover:scale-125  text-white transition-all duration-300 ",
  };
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Work",
      path: "/#work",
    },
    {
      name: "About",
      path: "/#about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  return (
    <nav className={styles.nav}>
      {navLinks.map((link, index) => (
        <Link key={index} href={link.path} alt={link.name}>
          <h1 className={styles.h1}>{link.name}</h1>
        </Link>
      ))}
    </nav>
  );
}
