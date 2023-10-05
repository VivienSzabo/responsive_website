import React from "react";

function ImageInfo() {
  return (
    <div className="text-bg-dark p-3 text-center">
      <hr/>
      <p>Sources Of Images:</p>
      <p>
        Photo by{" "}
        <a
          className="link-underline-warning link-info"
          href="https://unsplash.com/@stephwilll?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        >
          Steph Wilson
        </a>{" "}
        on{" "}
        <a
          className="link-underline-warning link-info"
          href="https://unsplash.com/photos/BnprYWk03bk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        >
          Unsplash
        </a>
      </p>
      <p>
        Photo by{" "}
        <a className="link-underline-warning link-info" href="https://unsplash.com/@dmnphoto?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Duman Photography
        </a>{" "}
        on{" "}
        <a className="link-underline-warning link-info" href="https://unsplash.com/photos/GvvtE31b0JI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Unsplash
        </a>
      </p>
    </div>
  );
}

export default ImageInfo;
