import uploadimage from "../assets/uploadimage.svg";
import { useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import useToast from "../hooks/useToast";

const Uploaderimage = function ({ setImage, setLoading }) {
  const onFileLoad = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setImage(e.target.files[0]);
    setLoading(true);
  };
  const { Toast, notifyReject } = useToast();

  const onDrop = useCallback((acceptedFiles) => {
    if (
      acceptedFiles[0].path !=
        "uploadimage.4007d610caf9917c2effbc0f6afb337c.svg" &&
      acceptedFiles[0]
    ) {
      console.log(acceptedFiles[0]);
      setImage(acceptedFiles[0]);
      setLoading(true);
    }
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    inputRef,
    open,
    acceptedFiles,
    fileRejections,
  } = useDropzone({
    onDrop,
    noClick: true,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpeg", ".jpg"],
    },
  });

  useEffect(() => {
    if (fileRejections.length > 0) {
      notifyReject();
    }
  }, [fileRejections]);

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
        <button type="button" className="button" onClick={open}>
          Choose a file
        </button>
      </form>
      {fileRejections.length > 0 ? <Toast /> : null}
    </section>
  );
};

export default Uploaderimage;
