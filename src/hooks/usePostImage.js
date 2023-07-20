const postImage = ({ image, setImageURL, setLoading }) => {
  const data = new FormData();
  data.append("file", image);
  data.append("upload_preset", process.env.REACT_APP_CLOUDINARY_PRESET);
  fetch(process.env.REACT_APP_CLOUDINARY_URL, {
    method: "post",
    body: data,
  })
    .then((res) => res.json())
    .then((data) => {
      setImageURL(data.secure_url);
      setLoading(false);
    })
    .catch((err) => console.log(err));
};

export default postImage;
