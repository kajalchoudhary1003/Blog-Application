import React from "react";

const Post = ({ post }) => {
  const url = post.picture
    ? post.picture
    : "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

  return (
    <div className="w-96 h-[370px] flex flex-col border-solid border-4 border-yellow-500 rounded-lg m-3">
      <img
        className="h-60 w-96 object-contain bg-slate-200 pb-1 border-b-2 border-solid border-slate-600"
        src={url}
        alt="blog"
      />
      <div className="flex flex-row justify-end pr-2">
        {" "}
        <p className="text-sm font-semibold text-slate-500">
          Category : {post.categories}
        </p>
      </div>
      <p className="font-semibold text-2xl pl-2 truncate ">{post.title}</p>

      <p className="pl-2 truncate">{post.description}</p>
      <div className="flex flex-row justify-end pr-2 text-sm font-semibold text-slate-400 mt-4">
        <p>Author : {post.username}</p>
      </div>
    </div>
  );
};

export default Post;
