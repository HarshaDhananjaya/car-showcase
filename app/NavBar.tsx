"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FcWorkflow } from "react-icons/fc";

const NavBar = () => {
  // Get the current path of the page
  const currentPath = usePathname();

  // Define the links in the navbar
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

  // Render the navbar
  return (
    <nav className="flex space-x-5 border-b border-gray-500 mb-5 px-5 h-14 items-center">
      {/* Logo of the application */}
      <Link href="/">
        <FcWorkflow size={30} />
      </Link>
      {/* Links in the navbar */}
      <ul className="flex space-x-5">
        {links.map((link) => (
          <li key={link.href}>
            {/* Make the link active if the current path matches the link's href */}
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
