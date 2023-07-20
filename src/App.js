import "./App.css";
import Uploaderimage from "./components/uploader";
import Footer from "./components/footer";
import Preview from "./components/preview";
import Loading from "./components/loading";
import postImage from "./hooks/usePostImage";
import { useState, useEffect } from "react";

function App() {
  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // When the image is uploaded, I use the postImage function to upload the image
    // to Cloudinary and set the image URL and loading state.
    if (image) {
      postImage({ image, setImageURL, setLoading });
    }
  }, [image]);
  //depending of the state of the component, I render the Uploaderimage, Preview or Loading component.
  return (
    <>
      <main id="App">
        {!imageURL && !loading ? (
          <Uploaderimage setImage={setImage} setLoading={setLoading} />
        ) : imageURL && !loading ? (
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
