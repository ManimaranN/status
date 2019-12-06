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

  const fileChangedHandler = () => {
    var fileUpload = document.getElementById("files");
    console.log(fileUpload.files[0]);

    setSelectedFile(fileUpload.files[0]);

    let reader = new FileReader();

    //url to be used in the preview of the selected image

    reader.onloadend = () => {
      setImagePreviewUrl(reader.result);
    };

    reader.readAsDataURL(fileUpload.files[0]);
  };

  const Upload = () => {
    //Get reference of FileUpload.
    var fileUpload = document.getElementById("files");

    //Check whether the file is valid Image.
    var regex = new RegExp("([a-zA-Z0-9s_\\.-:])+(.jpg|.png|.svg)$");
    if (regex.test(fileUpload.value.toLowerCase())) {
      //Check whether HTML5 is supported.
      if (typeof fileUpload.files != "undefined") {
        //Initiate the FileReader object.
        var reader = new FileReader();
        //Read the contents of Image File.
        reader.readAsDataURL(fileUpload.files[0]);
        reader.onload = function(e) {
          //Initiate the JavaScript Image object.
          var image = new Image();

          //Set the Base64 string return from FileReader as source.
          image.src = e.target.result;

          //Validate the File Height and Width.
          image.onload = function() {
            var height = this.height;
            var width = this.width;
            if (height == 167 || width == 250) {
              alert("Uploaded image has valid Height and Width.");
              fileChangedHandler();
              return true;
            }
            alert("Height and Width must not exceed the limit.");
            return false;
          };
        };
      } else {
        return false;
      }
    } else {
      alert("Please select a valid Image file.");
      return false;
    }
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
              onChange={Upload}
              style={{ display: "none" }}
            />
            <label for="files" className="custom-file-input" />
          </div>
        )}
        {console.log(imagePreviewUrl, ":image url")}

        {/* loads once the image is uploaded and replaces upload button  */}

        {imagePreviewUrl ? (
          <div className="image-container">
            <img src={imagePreviewUrl} alt="icon" width="200" />{" "}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
