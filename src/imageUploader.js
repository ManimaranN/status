import React, { useState } from "react";
import "./App.css";
import "./uploader.css";
import CloseIcon from "./close.svg";

export default function Uploader() {
  const [selectedFile, setSelectedFile] = useState();
  const [imagePreviewUrl, setImagePreviewUrl] = useState();

  //function for remove selected fish image

  const handleRemoveFile = () => {
    setImagePreviewUrl("");
  };

  //function for getting selected file and store it into the state selectedFile

  const fileChangedHandler = event => {
    console.log(event.target.files[0]);

    setSelectedFile(event.target.files[0]);

    let reader = new FileReader();

    //url to be used in the preview of the selected image

    reader.onloadend = () => {
      setImagePreviewUrl(reader.result);
    };

    reader.readAsDataURL(event.target.files[0]);
  };

  return (
    <div className="main_image_uploader">
      {console.log(imagePreviewUrl, ":image preview url")}
      <div className="image_upload_option">
        {imagePreviewUrl ? (
          //loads once image is added.

          <img className="close" src={CloseIcon} onClick={handleRemoveFile} />
        ) : (
          //loads when no image is added.

          <div className="upload_button">
            <input
              type="file"
              id="files"
              onChange={fileChangedHandler}
              style={{ display: "none" }}
            />
            <label for="files" className="custom-file-input" />
          </div>
        )}
        {console.log(imagePreviewUrl, ":image url")}

        {/* loads once the image is uploaded and replaces upload button  */}

        {imagePreviewUrl ? (
          <div className="image-container">
            <img
              src={imagePreviewUrl}
              alt="icon"
              width="200"
              accept="image/png, .jpeg, .jpg, image/gif"
            />{" "}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
