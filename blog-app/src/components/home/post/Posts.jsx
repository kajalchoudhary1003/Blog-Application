import React, { useEffect } from "react";
import { useState } from "react";
import { API } from "../../../service/api";
import Post from "./Post";
import { useSearchParams } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    const fetchData = async () => {
      let response = await API.getAllPosts({ category: category || "" });
      if (response.isSuccess) {
        setPosts(response.data);
      }
    };
    fetchData();
  }, [category]);

  return (
    <div className="flex flex-wrap px-3 justify-center">
      {posts && posts.length > 0 ? (
        posts.map((post) => (
          <div className="lg:w-1/3 md:w-1/2 w-full">
            <Post post={post} />
          </div>
        ))
      ) : (
        <div className="flex flex-row justify-center my-5">
          {" "}
          <p className="text-lg font-semibold text-red-600">
            No data available to display
          </p>
        </div>
      )}
    </div>
  );
};

export default Posts;
