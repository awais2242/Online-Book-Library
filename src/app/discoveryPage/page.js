"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchBooks } from "../lib/features/book/bookSlice";
// import { filterBooksByPrice } from '../lib/features/book/bookSlice';
import Image from "next/image";

const BookSearchByAuthor = () => {
  const dispatch = useDispatch();
  const [authorName, setAuthorName] = useState("");
  const { books, loading, error } = useSelector((state) => state.books);

  const handleSearch = () => {
    dispatch(searchBooks(authorName));
  };
 
  return (
    <div>
      <div className="relative grid h-[650px] grid-cols-1 lg:h-[500px]  ">
        <Image
          alt="Banner"
          src="data:image/jpeg;base64,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"
          className="w-full brightness-50 duration-500"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute py-10 pr-10 font-serif  text-white">
        <div className="translate-x-6 -translate-y-[500px]  text-3xl  italic sm:text-4xl lg:translate-x-[100px] lg:-translate-y-[450px] lg:text-5xl xl:-translate-y-[430px] xl:translate-x-[250px] ">
          Today a reader, tomorrow a leader.
        </div>
        <div className="translate-x-6 -translate-y-[500px] text-3xl  italic  sm:text-4xl   lg:-translate-y-[450px] lg:translate-x-[100px] lg:text-5xl xl:-translate-y-[420px] xl:translate-x-[390px] 2xl:translate-x-[600px]">
          Discover Books with us
        </div>
      </div>
      <div className="absolute left-4 -translate-y-[350px] xs:-translate-y-[350px]  sm:-translate-y-[300px] lg:left-[100px] lg:-translate-y-[300px] xl:translate-x-[-200px] xl:left-[590px] xl:-translate-y-[250px]  ">
        <div className="relative h-16 w-[300px] rounded-xl bg-zinc-800 opacity-90 sm:h-16 sm:w-[470px]">
          <input
            type="text"
            placeholder="Search Book with Keyword, AuthorName and by Title"
            className="absolute  left-1 top-3 flex h-10  w-[220px] appearance-none items-center rounded-xl border border-border-base bg-white px-5 text-sm outline-none outline transition duration-300 ease-in-out  focus:border-none focus:border-accent focus:outline-none  focus:ring-0 xs:left-2 sm:h-10 sm:w-[380px] md:left-2"
            required
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
          />
        </div>
        <button
          onClick={handleSearch}
          className="absolute top-3 right-1 bg-blue-400  px-1 py-2  text-white hover:bg-blue-700 focus:border-orange-400  sm:right-2 rounded-md"
        >
          Search
        </button>
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
      <div>
      
     
     
    </div>
    </div>
  );
};

export default BookSearchByAuthor;
