import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const BlogDetails = ({ match }) => {
  const [post, setPost] = useState({});
  const { id: postId } = useParams();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postId]);

  return (
    <div className="flex justify-center flex-col w-[100vw] h-[100vh">
      <div className="w-screen bg-white pt-20">
        <main className="relative mx-auto px-10 md:max-w-screen-md">
          <article className="text-gray-800">
            <h2 id="section-one" className="mb-4 text-3xl font-bold">
              {post.title}
            </h2>
            <p className="mb-10 text-gray-600">{post.body} </p>
          </article>
        </main>
      </div>
    </div>
  );
};

export default BlogDetails;
