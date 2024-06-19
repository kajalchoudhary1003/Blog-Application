import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { API } from "../../service/api";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataContext } from "../../context/DataProvider";

const DetailView = () => {
  const [post, setPost] = useState({});

  const { id } = useParams();
  const { account } = useContext(DataContext);

  const navigate = useNavigate();

  const url = post.picture
    ? post.picture
    : "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
  useEffect(() => {
    const fetchData = async () => {
      let response = await API.getPostById(id);
      if (response.isSuccess) {
        setPost(response.data);
      }
    };
    fetchData();
  }, []);

  const deleteBlog = async () => {
    let response = await API.deletePost(post._id);
  if(response.isSuccess){
    navigate('/');
  }
  }

  return (
    <div className="container mx-auto px-24">
      <img src={url} className="object-contain h-[30rem] w-full" alt="blog" />
      {/* condition for icon to be shown only if username matches of the post username */}
      {account.username === post.username && (
        <div className="flex flex-row justify-center my-2 gap-5">
         <Link to={`/update/${post._id}`}>
         <EditIcon
            className="cursor-pointer hover:scale-110 "
            sx={{ color: "#FF55BB", fontSize: 35 }}
          />
         </Link>
         
          <DeleteIcon
          onClick={() => deleteBlog()}
            className="cursor-pointer hover:scale-110"
            sx={{ color: "#4FC0D0", fontSize: 35 }}
          />
        </div>
      )}

      <h1 className="text-3xl font-bold my-2 text-wrap">{post.title}</h1>

      <p className="text-lg text-wrap">{post.description}</p>
      <p className="text-end font-semibold text-sm text-slate-500 my-3">
        Author : {post.username}
      </p>
      <p className="text-end font-semibold text-sm text-slate-500 my-3">
        Posted On :{" "}
        {post.createdDate
          ? new Date(post.createdDate).toDateString()
          : "Date not available"}
      </p>
    </div>
  );
};

export default DetailView;
