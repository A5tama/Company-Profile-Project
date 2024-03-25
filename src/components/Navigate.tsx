"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const Navigate: React.FC = () => {
  const [header, setHeader] = useState(false);

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
        setHeader(true)
    }else {
        setHeader(false)
    }
  };

  useEffect (()=>{
    window.addEventListener("scroll", scrollHeader)

    return () => {
        window.addEventListener("scroll", scrollHeader)
    }

  })

  return (
    <div className={header?"border w-[100%] fixed bg-transparent backdrop-blur-md z-20":"bg-green-900"}>
      <div className="header container mx-auto lg:px-10">
        <div className="flex justify-between  lg:px-8  py-3">
          <div>
            <Link href="/">
              <Image src="/logo52.png" alt="Logo" width={150} height={40} className="h-[45px]" />
            </Link>
          </div>

          <div className="hidden lg:block justify-between gap-3">
            <Button className="mx-3 bg-emerald-900">
            <Link href="/">Home</Link>
            </Button>

            <Button className="mx-3 bg-emerald-900">
            <Link href="/about">About</Link>
            </Button>

            <Button className="mx-3 bg-emerald-900">
            <Link href="/products">Products</Link>
            </Button>

            <Button className="mx-3 bg-emerald-900">
            <Link href="/team">Team</Link>
            </Button>
          </div>

          <div className="sm:block lg:hidden">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>MENU</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <Link href="/" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Home
                      </NavigationMenuLink>
                    </Link>

                    <Link href="/about" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        About
                      </NavigationMenuLink>
                    </Link>
                    <Link href="/products" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Products
                      </NavigationMenuLink>
                    </Link>

                    <Link href="/team" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Team
                      </NavigationMenuLink>
                    </Link>

                    <Link href="/contact" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Contacs
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigate;
