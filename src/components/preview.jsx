import success from "../assets/success.svg";

const Preview = function () {
  return (
    <section id="preview">
      <img src={success} alt="success" />
      <h1>Uploaded Successfully!</h1>
      <section id="dropzone"></section>
      <section>
        <form id="copyUrl">
          <input type="text" value="http://mydomain.com/wawawawa" />
          <button>Copy Link</button>
        </form>
      </section>
    </section>
  );
};

export default Preview;
