"use client";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../lib/features/book/loginSlice";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Discover", href: "/discoveryPage", current: false },
  { name: "About Us", href: "#", current: false },
  { name: "Contact Us", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const dispatch = useDispatch();
  const handleLogout = () => {
    // dispatch(logoutUser());
  };

  return (
    <Disclosure as="nav" className="bg-slate-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 sticky top-0 right-0 left-0">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="data:image/png;base64,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"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {isAuthenticated ? (
                  <button
                    data-modal-target="authentication-modal"
                    data-modal-toggle="authentication-modal"
                    class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                ) : (
                  <Link href="/login">
                    <button
                      data-modal-target="authentication-modal"
                      data-modal-toggle="authentication-modal"
                      class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      type="button"
                    >
                      Login
                    </button>
                  </Link>

                )}
               

                {/* Profile dropdown */}
                {/* <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu> */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
