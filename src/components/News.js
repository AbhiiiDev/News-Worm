import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";


const News =(props)=>{
const [articles, setarticles] = useState([])
const [loading, setloading] = useState(true)
const [page, setpage] = useState(1)
const [totalResults, settotalResults] = useState(0)
// document.title = `${capitalizeFirstLetter(props.category)}-NewsWorm Best News App`;


 const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  const updateNews= async()=> {
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=b3ad88c841684203ab1831643c5196e7&page=${page}&pageSize=${props.pageSize}`;
    setloading(true )
    let data = await fetch(url);
    props.setProgress(30);

    let parsedData = await data.json();
    props.setProgress(70);
    setarticles(parsedData.articles)
    settotalResults(parsedData.totalResults)
    setloading(false)
  props.setProgress(100);

  }
useEffect(() => {
  updateNews();
 
}, [])


  //   handlePrev=async()=> {

  // this.setState({page:this.state.page-1});
  // this.updateNews();

  //   }
  //   handleNext= async()=> {

  // this.setState({page:this.state.page+1});
  // this.updateNews();


  // }
 const fetchMoreData = async () => {


   setpage(page + 1 );
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=b3ad88c841684203ab1831643c5196e7&page=${page}&pageSize=${props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();
setarticles(articles.concat(parsedData.articles))
settotalResults( parsedData.totalResults)


  };


    return (
      <>

        <h1 className="text-center" style={{marginTop:'67px'}}> NewsWorm-Top {capitalizeFirstLetter(props.category)} Headlines</h1>

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner />}
        >


<div className="container">
          <div className="row my-4">
            {articles.map((element) => {
              // console.log(element)
              return <div className="col-md-4 my-3" key={element.url}>
                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>
            })}
          </div>
        </div>
        </InfiniteScroll >



      </>
 







    

    )
  
}

export default News