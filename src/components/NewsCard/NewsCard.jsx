// import {useState} fro  m "react";
import "./NewsCard.css";

const NewsCard = ({ newsItem, onClickCard }) => {
  const fulldate = new Date(newsItem.publishedAt);
  var date = fulldate.toString().split(" ");
  const hour = parseInt(date[4].substring(0, 2)); //
  const time = hour > 12 ? true : false;

  return (
    <div
      className="newsCard"
      onClick={() => {
        console.log("clickeds");
        onClickCard();
      }}
    >
      <img
        alt={newsItem.title}
        src={newsItem.urlToImage}
        className="newsImage"
      />
      <div className="newsText">
        <div>
          <span className="title">{newsItem.title}</span>
          <br />
          <span className="author">
            <a href={newsItem.url} target="__blank">
              <b>short </b>
            </a>{" "}
            <span className="muted">
              {" "}
              by {newsItem.author ? newsItem.author : "unknown"} /{" "}
              {time
                ? `${hour - 12}:${date[4].substring(3, 5)} pm`
                : `${hour}:${date[4].substring(3, 5)} am`}{" "}
              on {date[2]} {date[1]} {date[3]}, {date[0]}
            </span>
          </span>
        </div>

        <div className="lowerNewsText">
          <div className="description">{newsItem.description}</div>
          <span className="readmore">
            read more at{" "}
            <a href={newsItem.url} target="__blank" className="source">
              <b>{newsItem.source.name}</b>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
