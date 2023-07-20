import "./App.css";
import Uploaderimage from "./components/uploader";
import Footer from "./components/footer";
import Preview from "./components/preview";
import Loading from "./components/loading";
import { useState, useRef, useEffect } from "react";
function App() {
  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   if (image) {
  //     const data = new FormData();
  //     data.append("file", image);
  //     data.append("upload_preset", "imageupload");// this is my upload preset
  //     data.append("cloud_name", "dofqf3q4s"); // this is my cloud name
  //     fetch("https://api.cloudinary.com/v1_1/dofqf3q4s/image/upload", {
  //       method: "post",
  //       body: data,
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setImageURL(data.url);
  //         setLoading(false);
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // }, [image]);

  return (
    <>
      <main id="App">
        {!image && !loading ? (
          <Uploaderimage setImage={setImage} setLoading={setLoading} />
        ) : image && !loading ? (
          <Preview imageURL={imageURL} />
        ) : (
          <Loading />
        )}
        <Footer />
      </main>
    </>
  );
}

export default App;
