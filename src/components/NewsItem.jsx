import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date,source } = this.props;
        return (
            <div className="card" style={{ width: "18rem" }}>
                <img src={imageUrl ? imageUrl : "https://analyticsinsight.b-cdn.net/wp-content/uploads/2022/04/Bitgert-Price.webp"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {source}
                        <span class="visually-hidden">unread messages</span>
                    </span></h5>
                    <p className="card-text">{description}</p>
                    <p class="card-text">By {author ? author : "unknown"} on {new Date(date).toGMTString()}</p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark btn-sm">Read More</a>
                </div>
            </div>
        )
    }
}

export default NewsItem