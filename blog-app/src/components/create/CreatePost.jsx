import { Container, InputBase } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";
import { TextareaAutosize } from "@mui/base";
import { useLocation, useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";
import { API } from "../../service/api.js";

const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

const initialPost = {
  title: "",
  description: "",
  picture: "",
  username: "",
  categories: "",
  createDate: new Date(),
};

// text area styling
const TextArea = styled(TextareaAutosize)`
  width: 100%;
  margin-top: 5px;
  border: 2px solid #ff55bb;
  padding: 5px;
  font-size: 1.05rem;
  border-radius: 5px;
  font-size: 18px;
  font-family: "Times New Roman", Times, serif;
  &:focus-visible {
    outline: none;
  }
`;

const CreatePost = () => {
  const [post, setPost] = useState(initialPost);
  const [file, setfile] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const { account } = useContext(DataContext);
  const url = post.picture
    ? post.picture
    : "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        // api call
        const response = await API.uploadFile(data);
        // api to upload the image
        post.picture = response.data;
      }
    };
    getImage();
    post.categories = location.search?.split("=")[1] || "All";
    post.username = account.username;
  }, [file]);

  const savePost = async () => {
    let response = await API.createPost(post);
    if (response.isSuccess) {
      navigate("/");
    }
  };

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  return (
    <Container sx={{ mt: 3 }}>
      <div className="flex flex-row items-center">
        <img
          src={url}
          alt="there should be the blog-banner"
          className="object-cover h-96 rounded-md"
        ></img>
        {/* add image button */}
        <Button
          sx={{
            ml: 20,
            backgroundColor: "#F2BE22",
            ":hover": { backgroundColor: "#4FC0D0" },
          }}
          component="label"
          variant="contained"
          startIcon={<AddIcon />}
          href="#file-upload"
        >
          Add / Edit Image
          <VisuallyHiddenInput
            type="file"
            onChange={(e) => setfile(e.target.files[0])}
          />
        </Button>
      </div>
      {/* title input */}
      <InputBase
        placeholder="Title"
        fullWidth="true"
        onChange={(e) => handleChange(e)}
        name="title"
        sx={{
          fontSize: "1.5rem",
          p: 1,
          mt: 3,
          border: "2px",
          borderRadius: "5px",
          borderColor: "#4FC0D0",
          borderStyle: "solid",
        }}
      />
      {/* text area input */}

      <TextArea
        minRows={25}
        placeholder="Start your blog..."
        name="description"
        onChange={(e) => handleChange(e)}
      />
      {/* publish button */}
      <div className="flex justify-center mb-2">
        <Button
          onClick={() => savePost()}
          variant="contained"
          sx={{
            backgroundColor: "#F2BE22",
            letterSpacing: "1px",
            ":hover": { backgroundColor: "#4FC0D0" },
          }}
        >
          Publish
        </Button>
      </div>
    </Container>
  );
};

export default CreatePost;
