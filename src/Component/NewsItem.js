import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,ImageUrl,url}=this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <img className="card-img-top" src={!ImageUrl?"https://media.istockphoto.com/id/1311148884/vector/abstract-globe-background.jpg?s=612x612&w=0&k=20&c=9rVQfrUGNtR5Q0ygmuQ9jviVUfrnYHUHcfiwaH5-WFE=":ImageUrl} alt="bnews.jpg"/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a href={url} target="_blank" className="btn btn-primary">read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
