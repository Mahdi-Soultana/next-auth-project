import React, { useEffect, useState } from "react";
import getFile from "../../../utils/getFile";
import Image from "next/image";
function Form({ blogState }) {
  const [blog, setBlog] = blogState;

  const formReady = blog.content.trim() && blog.title.trim();

  const [load, setLoad] = useState("false");
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (load == "false" || loading == false) {
      setIsLoading("false");
    } else {
      setIsLoading("true");
    }
    return () => {
      setIsLoading("false");
    };
  }, [load, loading, isLoading]);

  async function handelOnChange(e) {
    if (e.target.name === "thumbnial") {
      let file = e.target.files[0];

      setLoad("true");
      if (file) {
        let isValidSize = true;
        if (file.size > 1_000_000) {
          isValidSize = false;
          setBlog((prevS) => ({
            ...prevS,
            thumbnial: "",
          }));
          setLoad("false");
          return;
        }
        const img = await getFile(file);

        setBlog((prevS) => ({
          ...prevS,
          [e.target.name]: img,
        }));
        setLoad("false");
      } else {
        setBlog((prevS) => ({
          ...prevS,
          thumbnial: "",
        }));
      }
    } else {
      setBlog((prevS) => ({
        ...prevS,
        [e.target.name]: e.target.value,
      }));
    }
  }

  const switcher = false;
  return (
    <>
      <label htmlFor="name">
        <span>title</span>
        <input
          autoComplete="off"
          type="text"
          placeholder="Title"
          name="title"
          value={blog.title}
          required
          onChange={handelOnChange}
        />
      </label>
      <textarea
        placeholder="Markdown Your Content  and you can preview it!"
        name="content"
        value={blog.content}
        required
        onChange={handelOnChange}
      ></textarea>
      <label htmlFor="image">
        <span>Thumbnial</span>
        <div className="image">
          <span>
            <Image
              src={
                blog.thumbnial ||
                "https://res.cloudinary.com/soultana-mahdi/image/upload/v1640166700/bkwztmzflpfmfmeqvtun.jpg"
              }
              alt="user"
              width={100}
              height={100}
              layout="responsive"
            />
          </span>
          <input
            placeholder="xxxxxxxxxx"
            autoComplete="off"
            type="file"
            name="thumbnial"
            id="image"
            onChange={handelOnChange}
          />
        </div>
      </label>

      <button
        type="submit"
        disabled={!formReady || isLoading === "true" ? true : false}
      >
        {!switcher ? "create" : "update"}
      </button>
    </>
  );
}

export default Form;
