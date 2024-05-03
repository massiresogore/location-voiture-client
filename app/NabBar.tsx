"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import classnames from "classnames";
import {
  Avatar,
  Box,
  Container,
  DropdownMenu,
  Flex,
  Text,
} from "@radix-ui/themes";
import { useSession } from "next-auth/react";

const NavBar = () => {
  return (
    <nav className="border-b mb-5 px-5 py-3">
      <Container>
            <NavLinks />
      </Container>
    </nav>
  );
};

const NavLinks = () => {
  const currentPath = usePathname();

  const {status, data:session} = useSession();

  console.log(status);
  
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Agences", href: "/agence" },
    { label: "automobile", href: "/automobile" },
  ];

  return (
    <nav className="mb-5 px-5">
         <Flex align="center" gap="3" justify="between" flexBasis="100%">

            <Link href="/">
              <AiFillBug />
            </Link>
          <ul className="flex space-x-6">
            {links.map((link) => (
              <li key={link.href}>
                <Link className={classnames({
                    "nav-link": true,
                    "!text-zinc-900": link.href === currentPath,
                })}href={link.href}>
                    {link.label}
                </Link>
              </li>
            ))}
            </ul>
            <Box>
              {status === "authenticated" &&
                   <DropdownMenu.Root>
                   <DropdownMenu.Trigger>
                     <Avatar
                     className="cursor-pointer"
                     radius="full"
                      src={session?.user?.image!} fallback="?"/>
                   </DropdownMenu.Trigger>
                   <DropdownMenu.Content  >
                    <DropdownMenu.Label>
                      {session.user?.email}
                    </DropdownMenu.Label>
                    <DropdownMenu.Label >
                      <DropdownMenu.Item >
                      <Link href="/api/auth/signout">Log out</Link>
                      </DropdownMenu.Item>
                    </DropdownMenu.Label>
                   </DropdownMenu.Content>
                 </DropdownMenu.Root>
                }
              {status === "unauthenticated" &&     <Link href="/api/auth/signin">Log in</Link> 
}
             
          </Box>
        </Flex>
   

  
    </nav>
  );
};



export default NavBar;
