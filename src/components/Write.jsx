import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "../css/Write.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Write = () => {
  const mb_nick = sessionStorage.getItem("nick");
  const navigate = useNavigate();
  const [image, setImage] = useState({
    image_file: "",
    preview_URL: "img/default_image.png",
  });
  let inputRef;

  const saveImage = (e) => {
    e.preventDefault();
    if (e.target.files[0]) {
      //새로운 이미지를 올리면 createObjectURL()을 통해 생성한 기존 URL을 폐기
      URL.revokeObjectURL(image.preview_URL);
      const preview_URL = URL.createObjectURL(e.target.files[0]);
      setImage(() => ({
        image_file: e.target.files[0],
        preview_URL: preview_URL,
      }));
    }
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    axios.post("/ittime/api/file/upload", formData).then(function (res) {
      setImage({
        image_file: res.data,
        preview_URL: URL.createObjectURL(e.target.files[0]),
      }).catch(function (err) {
        alert("오류");
      });
    });
  };

  const deleteImage = () => {
    //createObjectURL()을 통해 생성한 기존 URL을 폐기
    URL.revokeObjectURL(image.preview_URL);
    setImage({
      image_file: "",
      preview_URL: "img/default_image.png",
    });
  };

  useEffect(() => {
    //컴포넌트가 언마운트되면 createObjectURL()을 통해 생성한 기존 URL을 폐기
    return () => {
      URL.revokeObjectURL(image.preview_URL);
    };
  }, []);

  const [value, setValue] = useState("");
  const [type, setType] = useState("");

  const titleRef = useRef();

  const clickBtn = (e) => {
    setType(e.target.value);
  };

  const onsubmit = (e) => {
    e.preventDefault();

    if (titleRef.current.value === "") {
      alert("제목을 작성해주세요");
    } else if (value === "") {
      alert("내용을 입력해주세요");
    } else if (type === "") {
      alert("게시판을 선택해주세요");
    } else {
      axios.post("/ittime/boardWrite", {
        board_title: titleRef.current.value,
        board_content: value,
        board,
      });
    }
  };

  return <div></div>;
};

export default Write;
