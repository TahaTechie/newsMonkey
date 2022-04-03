import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title,description,imageUrl,newsUrl} = this.props;
        return (
            <div className="card" style={{width : "18rem"}}>
                <img src={imageUrl?imageUrl : "https://analyticsinsight.b-cdn.net/wp-content/uploads/2022/04/Bitgert-Price.webp"} className="card-img-top" alt="..."/>
                <div class ="card-body">
                <h5 class ="card-title">{title}</h5>
                <p class ="card-text">{description}</p>
                <a href={newsUrl} target="_blank" className="btn btn-primary btn-sm">Read More</a>
                </div>
            </div>
        )
    }
}

export default NewsItem