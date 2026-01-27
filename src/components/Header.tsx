"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@heroui/react";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";
import { menuItems } from "@/lib/data";

export const Logo = () => {
  return (
    <Image
      src="/assets/img/logo_trans.png"
      width={125}
      height={125}
      alt="Atelier Endurance Logo"
    />
  );
};

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      shouldHideOnScroll
      onMenuOpenChange={setIsMenuOpen}
      height={"6rem"}
      isBlurred={!isHome}
      className={`font-medium w-full z-50 ${
        isHome
          ? isMenuOpen
            ? "bg-white dark:bg-black absolute top-0 left-0"
            : "bg-transparent absolute top-0 left-0"
          : "bg-white dark:bg-black sticky top-0"
      }`}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <NavbarItem key={item.href} isActive={isActive}>
              <Link
                href={item.href}
                className={`text-xl ${
                  isActive
                    ? "primary"
                    : isHome
                      ? "text-white"
                      : "text-foreground"
                }`}
              >
                {item.label}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="https://forms.gle/gVNSToD87qrQ41wr6"
            className="text-lg"
            target="_blank"
          >
            Nous contacter
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
              }
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
