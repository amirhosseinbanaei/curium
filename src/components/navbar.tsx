"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { cn } from "@/utils/cn.util";
import navbarData from "@/data/navbar.data";
import colorPalatesData from "@/data/colorPalates.data";
import { useMenuStore } from "@/stores/menuStore";
import BarsIcon from "@/assets/icons/Bars.svg";
import MultiplyIcon from "@/assets/icons/Multiply.svg";
import Logo from "../../public/next.svg";

export default function Navbar() {
  const pathname = usePathname().split("/")[1];
  useCurrentPathnameColorPalate(pathname);

  const { isOpen, toggleMenu } = useMenuStore();

  return (
    <>
      <div
        className={cn(
          "side-space-style fixed top-0 z-50 flex h-16 w-full items-center justify-between gap-5 border-b-[1px] bg-white backdrop-blur-xl transition-all duration-700 lg:h-20",
          "tech:border-black-secondary tech:bg-gray-900",
          "media:border-black-secondary media:bg-gray-900",
          "business:border-blue-800 business:bg-blue-700",
          {
            "bg-opacity-80 tech:bg-opacity-70 media:bg-opacity-70 business:bg-opacity-70":
              !isOpen,
          },
        )}
      >
        <div className="hidden items-center justify-center gap-x-7 lg:flex">
          <NavItems activePathname={pathname} />
        </div>
        <div className="relative mx-1 flex items-center">
          <Link aria-label="Link to home page." href="/">
            <Logo className="h-20 w-20 fill-black tech:fill-white-primary media:fill-white-primary business:fill-white-primary" />
          </Link>
        </div>
        <div
          onClick={toggleMenu}
          className="flex h-10 w-10 items-center justify-center lg:hidden"
        >
          {isOpen ? (
            <MultiplyIcon className="h-10 w-10 fill-black tech:fill-white-primary media:fill-white-primary business:fill-white-primary" />
          ) : (
            <BarsIcon className="h-20 w-20 fill-black tech:fill-white-primary media:fill-white-primary business:fill-white-primary" />
          )}
        </div>
        <MobileMenuOverlay isOpen={isOpen} />
      </div>
    </>
  );
}

function useCurrentPathnameColorPalate(pathname: string) {
  const { closeMenu } = useMenuStore();

  const includePathnameForPalates = [
    " ",
    "tech",
    "media",
    "business",
    "curium-intelligence",
  ];
  const currentPathnamePalate = includePathnameForPalates.includes(pathname)
    ? colorPalatesData[pathname]
    : colorPalatesData.landing;

  useEffect(() => {
    Object.entries(currentPathnamePalate).forEach(([key, value]) =>
      document.documentElement.style.setProperty(key, value),
    );

    const bodyClassList = document.body.classList;
    navbarData.forEach(({ key }) => bodyClassList.remove(key));
    pathname && bodyClassList.add(pathname);

    closeMenu();
  }, [pathname, currentPathnamePalate, closeMenu]);
}

export function NavItems({
  className = "",
  activePathname,
}: {
  className?: string;
  activePathname?: string;
  isOpenMobileOverlay?: boolean;
}) {
  const t = useTranslations("Navbar");
  return (
    <>
      {navbarData.map(({ key, href }) => (
        <Link
          href={href}
          key={`navItems-${key}`}
          className={cn(
            `relative block w-fit py-3 font-medium text-black-primary after:absolute after:bottom-0 after:block after:h-[1px] after:w-full after:origin-center after:scale-x-0 after:bg-primary after:transition after:duration-300 after:content-[''] hover:after:scale-x-100 fa:text-base tech:text-white-primary media:text-white-primary business:text-white-primary lg:text-sm ${className}`,
            {
              "after:scale-x-100":
                activePathname && href.includes(activePathname),
            },
          )}
        >
          {t(`navItems.${key}`)}
        </Link>
      ))}
    </>
  );
}

function MobileMenuOverlay({ isOpen }: { isOpen: boolean }) {
  return (
    <section
      className={cn(
        `fixed left-0 top-16 z-50 h-screen w-full flex-col items-center gap-5 bg-white pt-20 ${
          isOpen ? "flex animate-fade-up" : "hidden animate-fade-down"
        }`,
        "tech:border-black-secondary tech:bg-gray-900",
        "media:border-black-secondary media:bg-gray-900",
        "business:border-blue-800 business:bg-blue-700",
      )}
    >
      <NavItems
        className="fill-black tech:fill-white-primary media:fill-white-primary business:fill-white-primary"
        isOpenMobileOverlay={true}
      />
    </section>
  );
}
