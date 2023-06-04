import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

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

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            // totalArticles : 0,
            page: 1
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=28ac3240d9ae4bfbb14bebcf712147ed&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles,
            totalResults: parsedData.totalResults,
        loading:false });
    }


    handleNextClick = async () => {
        if (!((this.state.page + 1) > Math.ceil(this.state.totalResults / 21)))
         {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=28ac3240d9ae4bfbb14bebcf712147ed&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading:true});
            let data = await fetch(url);
            let parsedData = await data.json();

            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading:false,
            });
        }
    }

    handlePrevClick = async () => {
        console.log("Prev");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=28ac3240d9ae4bfbb14bebcf712147ed&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();

        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading:false,
        });
    }

    render() {
        return (
            <div className='container my-3'>
                <h1 className='text-center'>NewsMonkey - Top Headlines</h1>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4 border-1 mx-auto" key={element.url}  >
                            <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 81) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt.replace("T"," ").replace("Z"," ")} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-center">
                    <button disabled={this.state.page <= 1} type='button' className='btn btn-dark mx-5' onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled={(this.state.page + 1) > Math.ceil(this.state.totalResults / 20)} type='button' className='btn btn-dark mx-5' onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News