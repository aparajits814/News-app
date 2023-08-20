import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps={
        country:'in',
        category:'general'
    }
    // static PropTypes={
    //     country:PropTypes.string,
    //     category:PropTypes.string
    // }
    articles = [
        {
            "source": {
                "id": "news-com-au",
                "name": "News.com.au"
            },
            "author": null,
            "title": "‘Oh my god’: Camera wipes out cricket star",
            "description": "<p>If South Africa weren&rsquo;t suffering enough, even the technology is starting to turn against them at the MCG in the Boxing Day Test.</p>",
            "url": "https://www.news.com.au/sport/cricket/anrich-nortje-taken-out-by-flying-fox-camera-in-boxing-day-test/news-story/c750c4645ee8f96ed81d890f5cce841f",
            "urlToImage": "https://content.api.news/v3/images/bin/0e6dfe6ea06b1a792bdf9d61e1207ac1",
            "publishedAt": "2022-12-27T04:42:00Z",
            "content": "If South Africa weren’t suffering enough, even the technology is starting to turn against them at the MCG in the Boxing Day Test.\r\nHaving been bowled out for less than 200, Australia cruised past jus… [+1612 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
    ]
    constructor() {
        super();
        console.log("This is News Constructor");
        this.state = {
            articles: this.articles,
            loading: false,
            page:1
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=6f66430af92c4092bc0fcbb0efb64ff9`
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles
        })
    }
     HandlePrevClick=async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=6f66430af92c4092bc0fcbb0efb64ff9&page=1`
        this.setState({
            loading:true
        })
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            page:this.state.page-1,
            loading:false
        })
       console.log("Prev button clicked");
    }
     HandleNextClick= async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=6f66430af92c4092bc0fcbb0efb64ff9&page=2`
        this.setState({
            loading:true
        })
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
       console.log("Next button clicked");
       this.setState({
        page:this.state.page+1,
        articles: parsedData.articles,
        loading:false
       })
    }
    render() {
        return (
            <div className='container my-3'>
                <h2>Top Headlines</h2>
                {this.state.loading && <Spinner></Spinner>}
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title} description={element.description} ImageUrl={element.urlToImage} url={element.url}></NewsItem>
                        </div>
                    })};
                </div>
                <div className="my-3">
                    <button disabled={this.state.page<=1} type="button" className="btn btn-outline-primary mx-3" onClick={this.HandlePrevClick}>Previous</button>
                    <button disabled={this.state.page>=2} type="button" className="btn btn-outline-primary mx-3" onClick={this.HandleNextClick}>Next</button>
                </div>
            </div>
        )
    }
}

export default News
