import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from "react-top-loading-bar";

export default function News() {
  const [type, setType] = useState(true);
  const [value, setValue] = useState("");

  const { category, country } = useParams();

  const [state, setState] = useState({
    data: [],
    page: 1,
    total: 0,
    perPage: 3,
  });

  const [progress, setProgress] = useState(0);

  let text = "India";
  if (country == "at") {
    text = "Austrilia";
  } else if (country == "us") text = "USA";

  async function updateData() {
    const api = `https://newsapi.org/v2/top-headlines?country=${
      country ? country : "in"
    }&apiKey=09e4e3c631474abbb53bea4c705b4902&pagesize=${state.perPage}&page=${
      state.page + 1
    }&category=${category ? category : ""}`;
    const response = await fetch(api);
    const parseData = await response.json();
    console.log(response);
    setState({
      ...state,
      data: state.data.concat(parseData.articles),
      page: state.page + 1,
    });
  }
  async function updateData2() {
    const api = `https://newsapi.org/v2/everything?q=${value}&apiKey=09e4e3c631474abbb53bea4c705b4902&pagesize=${
      state.perPage
    }&page=${state.page + 1}`;
    const response = await fetch(api);
    const parseData = await response.json();
    console.log(response);
    setState({
      ...state,
      data: state.data.concat(parseData.articles),
      page: state.page + 1,
    });
  }

  useEffect(() => {
    setState(true);
    async function start() {
      setProgress(20);
      const api = `https://newsapi.org/v2/top-headlines?country=${
        country ? country : "in"
      }&apiKey=09e4e3c631474abbb53bea4c705b4902&pagesize=${
        state.perPage
      }&page=1&category=${category ? category : ""}`;
      const response = await fetch(api);
      console.log(response);
      setProgress(50);
      const parseData = await response.json();
      setProgress(70);
      setState({
        ...state,
        data: parseData.articles,
        total: parseData.totalResults,
        page: 1,
      });
      setProgress(100);
    }

    start();
  }, [country, category]);

  const handleSearch = (e) => {
    e.preventDefault();
    // event.preventDefault()
    setValue(document.getElementById("input").value);
    async function start() {
      setProgress(20);
      const api = `https://newsapi.org/v2/everything?q=${document.getElementById("input").value}&apiKey=09e4e3c631474abbb53bea4c705b4902&pagesize=${
        state.perPage
      }&page=1`;
      const response = await fetch(api);
      console.log(response);
      setProgress(50);
      const parseData = await response.json();
      setProgress(70);
      setState({
        ...state,
        data: parseData.articles,
        total: parseData.totalResults,
        page: 1,
      });
      setProgress(100);
    }

    start();
    setType(false);
  }

  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="container">
        <h1 className="text-center">
          {text}'s Top News Headline {category ? category : "General"}
        </h1>

        <div className="d-flex my-4" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            id="input"
          />
          <button onClick={handleSearch} className="btn btn-outline-success" >
            Search
          </button>
        </div>

        <div className="d-flex justify-content-between mb-4">
          <button
            disabled={state.page === 1 ? true : false}
            onClick={() => {
              setState({ ...state, page: state.page - 1 });
            }}
            className="btn btn-primary"
          >
            Prev
          </button>
          <button
            disabled={state.page >= state.total / state.perPage ? true : false}
            onClick={() => {
              setState({ ...state, page: state.page + 1 });
            }}
            className="btn btn-primary"
          >
            Next
          </button>
        </div>
        <p>Total articles "{state.total}"</p>

        {state.loading ? (
          <Spinner />
        ) : !state.total ? (
          <h1>No result 😟</h1>
        ) : (
          <div className=" justify-content-">
            <InfiniteScroll
              className="row"
              dataLength={state.data} //This is important field to render the next data
              next={() => {
                type?updateData():updateData2()
              }}
              hasMore={state.total / state.perPage + 1 >= state.page}
              loader={<Spinner />}
              endMessage={
                <p style={{ textAlign: "center" }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
            >
              {state.data.map((value, index) => (
                <NewsItem key={index} data={value} />
              ))}
            </InfiniteScroll>
          </div>
        )}
      </div>
    </>
  );
}
