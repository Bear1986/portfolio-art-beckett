import Link from "next/link";

export default function Nav() {
  const styles = {
    wrapper: " bg-gray-200 w-[15rem] h-[13.5rem] drop-shadow-xl",
    nav: "flex flex-col py-12 -ml-3 -mt-9 w-[14rem] h-[12rem] bg-yellow-400 drop-shadow-2xl hover:scale-110 transition-all duration-400 p-10 border-yellow-200 border-2",
    h1: "text-3xl font-bold p-1 pb-3 text-center m-1  hover:scale-110 hover:bg-yellow-200 drop-shadow-xl transition-all duration-300 ",
    line: "border-b-2 border-yellow-200 w-10/18 mx-auto rounded-full",
  };
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <nav className={styles.nav}>
        {navLinks.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            alt={link.name}
          >
            <h1 className={styles.h1}>{link.name}</h1>
            <div className={styles.line} />
          </Link>
        ))}
      </nav>
    </div>
  );
}
