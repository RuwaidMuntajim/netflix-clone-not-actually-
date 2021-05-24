import React from 'react';
import './App.css';
import Row from './Components/Row';
import Banner from './Components/Banner';
import requests from './request';
function App() {

  return (
    <div className="App">
      
      <Banner fetchURL={requests.fetchNetflixOriginals}/>
      <Row title={"Netflix Original"} fetchURL={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title={"Trending"} fetchURL={requests.fetchTrending}/>
      <Row title={"Top Rated"} fetchURL={requests.fetchTopRated}/>
      <Row title={"Action Movies"} fetchURL={requests.fetchActionMovies}/>
      <Row title={"Romance Movies"} fetchURL={requests.fetchRomanceMovies}/>
      <Row title={"Horror Movies"} fetchURL={requests.fetchHorrorMovies}/>
      <Row title={"Comedy Movies"} fetchURL={requests.fetchComedyMovies}/>
      <Row title={"Documentaries"} fetchURL={requests.fetchDocumentaries}/>
      
    </div>
  );
}

export default App;
