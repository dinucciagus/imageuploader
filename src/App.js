import "./App.css";
import Uploaderimage from "./components/uploader";
import Footer from "./components/footer";
import Preview from "./components/preview";
import Loading from "./components/loading";
import { useState } from "react";
function App() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <main id="App">
        {!image && !loading ? (
          <Uploaderimage />
        ) : loading ? (
          <Loading />
        ) : (
          <Preview />
        )}
        <Footer />
      </main>
    </>
  );
}

export default App;
