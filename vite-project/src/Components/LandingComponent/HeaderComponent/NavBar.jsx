import React, { useState, useEffect } from "react";
// import piclogo from "public/hby"
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "خانه", href: "#", current: true },
  { name: "دوره ها", href: "#", current: false },
  { name: "اخبار و مقالات", href: "#", current: false },
  { name: " اساتید ", href: "#", current: false },
  { name: "تماس با ما", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Disclosure
      as="nav"
      className="bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-200 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white">
              <Bars3Icon
                className="block size-6 group-data-open:hidden"
                aria-hidden="true"
              />
              <XMarkIcon
                className="hidden size-6 group-data-open:block"
                aria-hidden="true"
              />
            </DisclosureButton>
          </div>

          <div className="md:flex shrink-0 items-center md:justify-start hidden">
            <img
              className="h-8 w-auto"
              src="../../../../public/logo/logoHBY.jpg"
              alt="لوگو"
            />
          </div>
          <div className="flex flex-1 items-center justify-end sm:items-stretch sm:justify-center">
            <div className="hidden sm:flex space-x-reverse space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-indigo-600 text-white"
                      : "text-gray-800 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800",
                    "rounded-md px-3 py-2 text-sm font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:pr-0">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="rounded-full p-2 text-gray-500 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              {darkMode ? (
                <SunIcon className="size-5" />
              ) : (
                <MoonIcon className="size-5" />
              )}
            </button>

            <button className="relative rounded-full p-2 text-gray-500 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800">
              <BellIcon className="size-5" />
            </button>

            <Menu as="div" className="relative ml-3 md:hidden">

              <MenuButton className="flex rounded-full focus:outline-none ">
                <img
                  className="h-8 w-8 rounded-full"
                  src="../../../../public/logo/bahar.jpg"
                  alt="پروفایل"
                />
              </MenuButton>
              <MenuItems className="absolute left-0 z-10 mt-2 w-48 origin-top-left rounded-md bg-white dark:bg-gray-800 py-1 shadow-lg ring-1 ring-black/5">
                <MenuItem>
<a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    پروفایل
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    تنظیمات
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    خروج
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-x-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-indigo-600 text-white"
                  : "text-gray-800 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}