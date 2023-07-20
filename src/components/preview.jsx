import success from "../assets/success.svg";

const Preview = function ({ imageURL }) {
  //I need to do a onClick event to copy the url to the clipboard
  //I need to do a useEffect to set the url to the clipboard

  const copyURL = () => {};
  return (
    <section id="preview">
      <img src={success} alt="success" />
      <h1>Uploaded Successfully!</h1>
      <section id="dropzone">
        <img id="photoPreview" src={imageURL} alt="preview of uploaded photo" />
      </section>
      <section>
        <form id="copyUrl">
          <input type="text" value="http://mydomain.com/wawawawa" />
          <button onClick={copyURL()}>Copy Link</button>
        </form>
      </section>
    </section>
  );
};

export default Preview;
