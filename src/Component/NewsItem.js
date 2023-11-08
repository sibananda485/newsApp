import React from "react";

export default function NewsItem(props) {
  return (
    <>
      <div className="col-12 col-md-4">
        <div className="card mb-3">
          <div style={{ height: "230px" }}>
            <img
              style={{ objectFit: "cover", height: "inherit" }}
              src={
                props.data?.urlToImage
                  ? props.data?.urlToImage
                  : "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"
              }
              className="card-img-top"
              alt="..."
            />
          </div>
          <div className="card-body">
            <h5
              style={{ maxHeight: "50px", overflow: "hidden" }}
              className="card-title"
            >
              {props.data.title}...
            </h5>
            <p
              style={{ maxHeight: "50px", overflow: "hidden" }}
              className="card-text"
            >
              {props.data.description}...
            </p>
            <p className="card-text">
              <small className="text-body-secondary">
                {props.data.publishedAt.slice(0, 10)}
              </small>
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href={props.data.url}
              className="btn btn-primary"
            >
              Read More..
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
