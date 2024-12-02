import React, { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../components/ui/navigation-menu.tsx";
import { Button } from "./button.tsx";
import Logo from "../../assets/Frame 22.svg";

interface headerProps {
  current: "home" | "about" | "service" | "page" | "blog";
}
const Header: React.FC<headerProps> = ({ current }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex flex-row items-center gap-60 py-8 w-full justify-center transition-all duration-300 ${
        isScrolled
          ? "sticky top-0  z-50 bg-blur backdrop-blur-md bg-opacity-80 rounded-lg"
          : ""
      }`}
    >
      <img src={Logo} />
      <div className="flex flex-row items-center justify-center gap-16">
        <a
          href="/"
          className={`no-underline text-white text-md ${
            current === "home" ? "font-semibold" : "font-light"
          } `}
        >
          Home
        </a>
        <a
          href="/about"
          className={`no-underline text-white text-md ${
            current === "about" ? "font-semibold" : "font-light"
          } `}
        >
          About us
        </a>
        <a
          href="/service"
          className={`no-underline text-white text-md ${
            current === "service" ? "font-semibold" : "font-light"
          } `}
        >
          Service
        </a>
        <div className="flex flex-row gap-12">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={`bg-[#242424] hover:bg-[#242424] hover:text-white text-md bg-transparent ${
                    current === "page" ? "font-semibold" : "font-light"
                  }`}
                >
                  <a href="/page">Page</a>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={`bg-[#242424] hover:bg-[#242424] hover:text-white text-md bg-transparent ${
                    current === "blog" ? "font-semibold" : "font-light"
                  }`}
                >
                  <a href="/blog">Blog</a>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      <Button
        variant={"outline"}
        size={"lg"}
        className="border-gradient !border h-[52px] bg-transparent rounded-none"
      >
        Contact us
      </Button>
    </div>
  );
};

export default Header;
