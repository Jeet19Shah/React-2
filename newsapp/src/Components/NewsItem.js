import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date} = this.props;
    return (
      <div className='my-3'>
        <div className="card mx-auto" /*style={{width: "18rem"}}*/>
            <img src={imageUrl?imageUrl:"https://images.cnbctv18.com/wp-content/uploads/2021/02/SEBI.jpg"} className="card-img-top" alt="..." style={{height:'150px'}} />
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className='card-text'> <small className='text-muted'>By {author?author:"annonyms"} on {date}</small> </p>
                <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem