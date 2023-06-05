import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

    static defaultProps ={
        country:'in',
        pageSize: 9,
        catagory:"General"
    }

    static propTypes ={
        country:PropTypes.string,
        pageSize:PropTypes.number,
        catagory:PropTypes.string
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase()+string.slice(1);
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            totalArticles : 0,
            page: 1
        }
        document.title = `${this.capitalizeFirstLetter(this.props.catagory)} - NewsMonkey`;
    }

    async updateNews(){
        this.props.setProgress(0);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=28ac3240d9ae4bfbb14bebcf712147ed&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles,
            totalResults: parsedData.totalResults,
        loading:false });
        this.props.setProgress(100);
    }

    async componentDidMount() {
        this.updateNews();
    }

    fetchMoreData = async () => {
        this.setState({page:this.state.page+1});
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=28ac3240d9ae4bfbb14bebcf712147ed&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ 
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading:false
         });
      };

    render() {
        return (
            <>
                <h1 className='text-center'>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.catagory)} Headlines</h1>
                {/* {this.state.loading && <Spinner />} */}

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((element) => {
                                return <div className="col-md-4 border-1 mx-auto" key={element.url}  >
                                    <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 81) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt.replace("T"," ").replace("Z"," ")} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        )
    }
}

export default News