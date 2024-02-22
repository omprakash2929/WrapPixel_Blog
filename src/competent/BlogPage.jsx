import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  console.log(posts);
  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=9`
      )
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [currentPage]);

  const sliceTitle = (title) => {
    const maxLength = 50;
    if (title.length > maxLength) {
      return title.slice(0, maxLength) + "...";
    } else {
      return title;
    }
  };

  return (
    <section className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="  ">
       
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Most Recent Posts
          </h2>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 xl:grid-cols-3 xl:gap-16 lg:px-4 xl:px-8">
         
          {posts.map((post) => (
            <div key={post.id}>
              <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
                <a
                  href="#"
                  className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
                >
                  <img
                    src="https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    loading="lazy"
                    alt
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                </a>
                <div className="flex flex-col gap-2 text-left">
                  <h2 className="text-xl font-bold text-gray-800 ">
                    <Link
                      to={`/post/${post.id}`}
                      className="transition duration-100 hover:text-rose-500 active:text-rose-600 "
                    >
                      {sliceTitle(post.title)}
                    </Link>
                  </h2>
                  <p className="text-gray-500 "> {post.body}</p>
                  <div>
                    <Link
                      to={`/post/${post.id}`}
                      className="font-semibold text-rose-500 transition duration-100 hover:text-rose-600 active:text-rose-700"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
      <div className="flex mx-16 w-auto justify-between mt-20 overflow-hidden">
        <button
          onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        >
          <FaArrowLeft />
          <span className="mx-1">Previous</span>
        </button>

        <button
          onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
          className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        >
          <span className="mx-1"> Next</span>
          <FaArrowRight />
        </button>
      </div>

      <style>{`
        button:disabled {
          background-color: red;
        }
        button:hover:disabled {
          background-color: red;
        }
      `}</style>
    </section>
  );
};

export default BlogPage;
