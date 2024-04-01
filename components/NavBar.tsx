"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { a, useSpring, useTrail } from "@react-spring/web";
import * as icons from "../components/icons";

const Trail: React.FC<{ open: boolean; children: any }> = (
  { open, children },
) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2200, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 30,
    height: open ? 50 : 50,
    from: { opacity: 0, x: 30, height: 50 },
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div
          key={index}
          style={style}
          className="flex justify-center"
        >
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

function NavBar(): JSX.Element {
  const pathname = usePathname();

  // dark mode
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  // collapse navbar on scroll
  const [collapsed, setCollapsed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
  const borderSpring = useSpring({
    borderBottomWidth: collapsed ? 1 : 0,
  });

  // burger menu
  const [showMenu, setShowMenu] = useState(false);

  return (
    <a.div
      style={borderSpring}
      className="sticky top-0 z-10 flex w-full justify-center border-tertiary bg-bg dark:border-tertiary-dark dark:bg-bg-dark"
    >
      <div className="flex w-full max-w-screen-lg items-center justify-between py-4 px-8">
        <Link href="/" passHref legacyBehavior>
          <a>
            {/* logo */}
            <div className="flex items-center">
              <div className="flex flex-col -space-y-2 items-end">
                <h1 className="font-bold text-3xl">NYC</h1>
                <p className="text-lg tracking-[0.3em] -mr-1">schools</p>
              </div>
              <div>
                <icons.MingcuteStatueOfLibertyLine className="h-10" />
              </div>
            </div>
          </a>
        </Link>

        {/* navigation */}
        <div className="flex items-center text-lg font-medium">
          {/* mobile */}
          <div className="flex items-center text-3xl text-zinc-600 dark:text-zinc-400 sm:hidden">
            {/* menu button */}
            <button
              title="Menu"
              onClick={() => setShowMenu(!showMenu)}
              className="translate-y-1"
            >
              {showMenu
                ? <icons.PhXBold className="h-8" />
                : <icons.PhListBold className="h-8" />}
            </button>
            {/* menu contents */}
            <div
              className={"fixed bottom-0 top-0 left-0 right-0 z-20 bg-bg py-10 dark:bg-bg-dark" +
                (collapsed ? " mt-16" : " mt-24") +
                (showMenu ? "" : " hidden")}
            >
              <Trail open={showMenu}>
                <Link href="/about" passHref legacyBehavior>
                  <a
                    className=""
                    onClick={() => setShowMenu(!showMenu)}
                  >
                    about
                  </a>
                </Link>
                <Link href="/explore" passHref legacyBehavior>
                  <a className="" onClick={() => setShowMenu(!showMenu)}>
                    explore
                  </a>
                </Link>
                <Link href="/notes" passHref legacyBehavior>
                  <a className="" onClick={() => setShowMenu(!showMenu)}>
                    notes
                  </a>
                </Link>
                <Link href="/people" passHref legacyBehavior>
                  <a className="" onClick={() => setShowMenu(!showMenu)}>
                    people
                  </a>
                </Link>
                <button
                  title="Toggle Dark Mode"
                  className="pt-4 duration-200 hover:text-zinc-300"
                  onClick={() => {
                    setShowMenu(!showMenu);
                    if (document.documentElement.classList.contains("dark")) {
                      document.documentElement.classList.remove("dark");
                      localStorage.theme = "light";
                      setDarkMode(false);
                    } else {
                      document.documentElement.classList.add("dark");
                      localStorage.theme = "dark";
                      setDarkMode(true);
                    }
                  }}
                >
                  {darkMode
                    ? <icons.PhMoonBold className="h-6" />
                    : <icons.PhSunBold className="h-6" />}
                </button>
              </Trail>
            </div>
          </div>

          {/* desktop */}
          <div className="hidden items-center space-x-5 text-secondary dark:text-secondary-dark sm:flex">
            <Link href="/about" passHref legacyBehavior>
              <a
                className={pathname === "/about"
                  ? "text-zinc-400 dark:text-zinc-300"
                  : "duration-200 hover:text-zinc-400 dark:hover:text-zinc-300"}
              >
                about
              </a>
            </Link>
            <Link href="/explore" legacyBehavior>
              <a
                className={pathname === "/explore"
                  ? "text-zinc-400 dark:text-zinc-300"
                  : "duration-200 hover:text-zinc-400 dark:hover:text-zinc-300"}
              >
                explore
              </a>
            </Link>
            <Link href="/notes" legacyBehavior>
              <a
                title="Notes"
                className={pathname === "/notes"
                  ? "text-zinc-400 dark:text-zinc-300"
                  : "duration-200 hover:text-zinc-400 dark:hover:text-zinc-300"}
              >
                <icons.PhNoteBlankBold className="h-6" />
              </a>
            </Link>
            <Link href="/people" legacyBehavior>
              <a
                title="People"
                className={pathname === "/people"
                  ? "text-zinc-400 dark:text-zinc-300"
                  : "duration-200 hover:text-zinc-400 dark:hover:text-zinc-300"}
              >
                <icons.PhUsersThreeBold className="h-6" />
              </a>
            </Link>
            <button
              title="Toggle Dark Mode"
              className="duration-200 hover:text-zinc-400 dark:hover:text-zinc-300"
              onClick={() => {
                if (document.documentElement.classList.contains("dark")) {
                  document.documentElement.classList.remove("dark");
                  localStorage.theme = "light";
                  setDarkMode(false);
                } else {
                  document.documentElement.classList.add("dark");
                  localStorage.theme = "dark";
                  setDarkMode(true);
                }
              }}
            >
              {darkMode
                ? <icons.PhMoonBold className="h-6" />
                : <icons.PhSunBold className="h-6" />}
            </button>
          </div>
        </div>
      </div>
    </a.div>
  );
}

export default NavBar;
