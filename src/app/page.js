"use client";
import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "./lib/features/book/bookSlice";
import Image from "next/image";
export default function Home() {
  const dispatch = useDispatch();
  const { books, loading, error } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  if (error) {
    return <div>Error: {error}</div>;
  }
// console.log("books",books)
if (!Array.isArray(books)) {
  return <div>No books available</div>;
}

  return (
    // <main className="flex min-h-screen flex-col items-center justify-between ">
     <main>
       <div className="relative grid h-[550px] grid-cols-1 lg:h-[500px]  ">
        <Image
          alt="Banner"
          src="data:image/jpeg;base64,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"
          className="w-full brightness-50 duration-500"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute py-36 pr-10 font-serif  text-white">
        <div className="translate-x-6 -translate-y-[500px]  text-3xl  italic sm:text-4xl lg:translate-x-[100px] lg:-translate-y-[450px] lg:text-5xl xl:-translate-y-[430px] xl:translate-x-[250px] ">
          Today a reader, tomorrow a leader.
        </div>
        <div className="translate-x-6 -translate-y-[500px] text-3xl  italic  sm:text-4xl   lg:-translate-y-[450px] lg:translate-x-[100px] lg:text-5xl xl:-translate-y-[420px] xl:translate-x-[390px] 2xl:translate-x-[600px]">
          Discover Books with us
        </div>
      </div>
      <div className="flex flex-row py-6 text-5xl text-slate-700 font-semibold justify-center">
        Read Books With Us
      </div>
      <div className="grid grid-cols-1">

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-3  py-10 px-20">
          {books.map((book) => (
            <li key={book.isbn13}>
              <div class="max-w-sm h-[500px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img class="rounded-t-lg" src={book.image} alt="" />
                </a>
                <div class="p-1">
                  <a href={book.url}>
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {book.title}
                    </h5>
                  </a>
                  <div className="flex flex-row justify-between">
                  <p class="mb-1 font-normal text-gray-700 dark:text-gray-400">{book.price}</p>
                  <a
                    href={book.url}
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
