// import Container from '@mui/material/Container';
import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsContent.css";
import { useState, useEffect } from "react";
import Modal from '../../components/Modal/Modal'

const useIsMobileView = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);

    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
};

const NewsContent = ({ newsArray, loadMore, setLoadMore, newsResults }) => {
  const [selectedItem, setSelectedItem] = useState(undefined);
  const isMobile = useIsMobileView()
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
          flex: 1,
        }}
      >
        <div className="content">
          <div className="downloadMessage">
            <span className="downloadText">
              For the best experience use inshorts app on your smartphone
            </span>
            <img
              alt="app store"
              height="80%"
              src="https://assets.inshorts.com/website_assets/images/appstore.png"
            />
            <img
              alt="play store"
              height="80%"
              src="https://assets.inshorts.com/website_assets/images/playstore.png"
            />
          </div>
          {newsArray.map((newsItem) => (
            <NewsCard
              newsItem={newsItem}
              key={newsItem.title}
              onClickCard={() => {
                setSelectedItem(newsItem);
              }}
            />
          ))}
          {loadMore <= newsResults && (
            <>
              <hr />
              <button
                className="loadMore"
                onClick={() => setLoadMore(loadMore + 20)}
              >
                Load More
              </button>
            </>
          )}
        </div>
      </div>


      {selectedItem && (
        isMobile ? <Modal isOpen={true} onClose={() => setSelectedItem(undefined)} >
          <div style={{
            width: '80%',
            backgroundColor: 'white'
          }}>
            <button
              onClick={() => {
                setSelectedItem(undefined);
              }}
              style={{
                display: "block",
                marginBottom: "10px",
                padding: "5px 10px",
                border: "none",
                backgroundColor: "#f44336",
                color: "white",
                cursor: "pointer",
              }}
            >
              Close
            </button>
            <img
              src={selectedItem.urlToImage}
              alt="Article"
              className="card-image"
              style={{
                width: "100%", height: "auto",
                padding: '10px'
              }}
            />
            <div className="card-content">
              <h2 className="card-title">{selectedItem.title}</h2>
              <p className="card-meta">
                By {selectedItem.author} | Source: {selectedItem.source.name} |
                Published on:{" "}
                {new Date(selectedItem.publishedAt).toLocaleDateString()}
              </p>
              <p className="card-description">{selectedItem.description}</p>
              <a
                href={selectedItem.url}
                className="card-link"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#007BFF", textDecoration: "none" }}
              >
                Read More
              </a>
            </div>
          </div>
        </Modal> :
          <div
            style={{
              flex: 1,
              width: "100%",
              maxWidth: "800px",
              backgroundColor: "white",
              borderWidth: "1px",
              borderColor: "black",
              position: "sticky", // Make the element sticky
              top: "10px", // Stick to 10px from the top of the viewport
              alignSelf: "flex-start", // Ensure the sticky behavior aligns with the scroll
              padding: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <button
              onClick={() => {
                setSelectedItem(undefined);
              }}
              style={{
                display: "block",
                marginBottom: "10px",
                padding: "5px 10px",
                border: "none",
                backgroundColor: "#f44336",
                color: "white",
                cursor: "pointer",
              }}
            >
              Close
            </button>
            <div className="card">
              <img
                src={selectedItem.urlToImage}
                alt="Article"
                className="card-image"
                style={{ width: "100%", height: "auto" }}
              />
              <div className="card-content">
                <h2 className="card-title">{selectedItem.title}</h2>
                <p className="card-meta">
                  By {selectedItem.author} | Source: {selectedItem.source.name} |
                  Published on:{" "}
                  {new Date(selectedItem.publishedAt).toLocaleDateString()}
                </p>
                <p className="card-description">{selectedItem.description}</p>
                <a
                  href={selectedItem.url}
                  className="card-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#007BFF", textDecoration: "none" }}
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
      )}
    </div>
  );
};

export default NewsContent;
