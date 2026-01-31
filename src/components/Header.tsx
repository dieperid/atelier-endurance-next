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
    <Link href="/">
      <Image
        src="/assets/img/logo-trans.png"
        width={125}
        height={125}
        alt="Atelier Endurance Logo"
      />
    </Link>
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
      isBlurred={!isHome || (isHome && isMenuOpen)}
      classNames={{
        wrapper: "container max-w-6xl mx-auto px-6 sm:px-16 xl:px-0",
      }}
      className={`font-medium w-full z-50 ${
        isHome
          ? isMenuOpen
            ? "bg-white absolute top-0 left-0"
            : "bg-transparent absolute top-0 left-0"
          : "bg-white sticky top-0"
      }`}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
        />
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-4" justify="center">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <NavbarItem key={item.href} isActive={isActive}>
              <Link
                href={item.href}
                className={`text-xl hover:underline ${
                  isActive
                    ? "primary font-normal"
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
            className="sm:text-lg"
            target="_blank"
          >
            Nous contacter
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="sm:px-16">
        {menuItems.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                href={item.href}
                className={`text-xl hover:underline ${
                  isActive ? "primary font-normal" : "text-foreground"
                }`}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
}
