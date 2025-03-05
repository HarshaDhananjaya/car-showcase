"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FcWorkflow } from "react-icons/fc";

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    {
      label: "Dashboard",
      href: "/",
    },
    {
      label: "Issues",
      href: "/issues",
    },
  ];

  return (
    <nav className="flex space-x-5 border-b border-gray-500 mb-5 px-5 h-14 items-center">
      <Link href="/">
        <FcWorkflow size={30} />
      </Link>
      <ul className="flex space-x-5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              className={link.href === currentPath ? "active" : "inactive"}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
