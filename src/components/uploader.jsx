import uploadimage from "../assets/uploadimage.svg";

const Uploaderimage = function () {
  return (
    <section id="uploader">
      <h1 className="title">Upload your image</h1>
      <h5>File should be Jpeg, Png,...</h5>
      <section id="dropzone">
        <img src={uploadimage} alt="dropzone for image to upload" />
        <p>Drag & Drop your image here</p>
      </section>
      <p>Or</p>
      <button>Choose a file</button>
    </section>
  );
};

export default Uploaderimage;
