import React,{useState,useEffect}from 'react'
import NewsItem from './newsitem'
import Spinner from './spinner';
import propTypes from "prop-types";
import InfiniteScroll from 'react-infinite-scroll-component';







export default function News(props)  {

    const [articles, setarticles] = useState([])
    const [loading, setloading] = useState(true)
    const [page, setpage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    News.defaultProps = {
        country: "in",
        pageSize: 9,
        category: "general",

    }
    News.propTypes = {
        country: propTypes.string,
        pageSize: propTypes.number,
        category: propTypes.string,

    }



    document.title = `${props.category.charAt(0).toUpperCase() + (props.category).slice(1)}-News Desi`




const updateNews = async () => {
    props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=f878f617d4c648248a7f72da886c7e64&page=${page}&pageSize=${props.pageSize}`;
    setloading({ loading: true });
    let data = await fetch(url);
    props.setProgress(50)
    let parsedData = await data.json()
    props.setProgress(70)

    setarticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setloading(false)

    props.setProgress(100)
}

 useEffect( ()=>{
    updateNews();
})


const fetchMoreData = async () => {
    setpage(page + 1 )
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=f878f617d4c648248a7f72da886c7e64&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    //    const  conc=articles.concat(parsedData.articles)
        setarticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        setloading (false)
    
};

    return (

        <div className='container my-3'>

            <h1 style={{ fontFamily: `"Brush Script MT", "cursive"` }} className='text-center'>News Hub- Top {(props.category).charAt(0).toUpperCase() + (props.category).slice(1)} Headlines</h1>



            <div className="row">
                {!loading && articles.map((element) => {
                    return <div className="col-md-4">
                        <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description.slice(0, 70) : ""} imageUrl={element.urlToImage} url={element.url} author={!element.author ? "Unknown" : element.author} date={element.publishedAt} source={element.source.name} />
                    </div>

                })}
            </div>
           

            {/* infinite scroll library */}
            <InfiniteScroll
                dataLength={articles.length} //This is important field to render the next data
                next={fetchMoreData}
                hasMore={articles.length!== totalResults}
                loader={<Spinner />}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! That's all for Now</b>
                    </p>
                }

            >

            </InfiniteScroll>
        </div>

    )
}

