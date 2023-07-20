import uploadimage from "../assets/uploadimage.svg";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const Uploaderimage = function ({ setImage, setLoading }) {
  const onFileLoad = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
    setLoading(true);
  };
  const onFileSelect = () => {
    inputRef.current.click();
  };
  const onDrop = useCallback((acceptedFiles) => {
    setImage(acceptedFiles[0]);
    setLoading(true);
  }, []);
  const { getRootProps, getInputProps, isDragActive, inputRef } = useDropzone({
    onDrop,
  });

  return (
    <section id="uploader">
      <h1 className="title">Upload your image</h1>
      <h5>File should be Jpeg, Png,...</h5>
      <form>
        <section id="dropzone" {...getRootProps({ refKey: "innerref" })}>
          <img src={uploadimage} alt="dropzone for image to upload" />
          <input
            type="file"
            id="fileBrowserinput"
            ref={inputRef}
            onDragOver={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            onDrop={(e) => {
              onFileLoad(e);
            }}
            onChange={(e) => onFileLoad(e)}
            {...getInputProps()}
          />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag & Drop your image here</p>
          )}
        </section>
        <p>Or</p>
        <button onClick={onFileSelect}>Choose a file</button>
      </form>
    </section>
  );
};

export default Uploaderimage;
