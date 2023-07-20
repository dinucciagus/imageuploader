import success from "../assets/success.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useToast from "../hooks/useToast";

const Preview = function ({ imageURL }) {
  const copyURL = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(imageURL);
  };
  const { Toast, notifySuccess } = useToast();

  return (
    <section id="preview">
      <img src={success} alt="success" />
      <h1>Uploaded Successfully!</h1>
      <section id="photoPreview">
        <img src={imageURL} alt="preview of uploaded photo" />
      </section>
      <section>
        <form id="copyUrl">
          <input type="text" value={imageURL} readOnly />
          <button
            onClick={(e) => {
              copyURL(e);
              notifySuccess();
            }}
          >
            Copy Link
          </button>
        </form>
      </section>
      <Toast />
    </section>
  );
};

export default Preview;
