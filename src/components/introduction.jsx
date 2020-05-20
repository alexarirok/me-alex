import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
            <section id="colorlib-hero" className="js-fullheigt" data-section="home">
                <div className="flexslider js-fullheight">
                    <ul className="slides">
                        <li style={{backgroundImage: 'url(images/img11.jpeg)', height: '100%'}}>
                            <div className="overlay" />
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                        <div className="slider-text-inner js-fullheight">
                                            <div className="desc">
                                                <h1>Jambo!! <br/>I'm Alex Korir</h1>
                                                <h2>a multi-talented web designer & developer, a strong beliver, God's servant a sports guy <a href="https://www.linkedin.com/in/alex-korir-687b3a113/">alex korir</a></h2>
                                                <p><a href="btn btn-primary btn-learn">Download Cv <em className="icon-download4" /></a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li style={{backgroundImage: 'url(images/img10.jpeg)'}}>
                            <div className="overlay" />
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                        <div className="slider-text-inner">
                                            <div className="desc">
                                                <h1>I am <br/> an entusiat upcoming farmer.</h1>
                                                <h2>I embrace technology in farming. Use and educate farmers on importance of using tech <a href="https://www.linkedin.com/in/alex-korir-687b3a113/">alex korir</a></h2>
                                                <p><a href="btn btn-primary btn-learn">View Portfolio <em className="icon-briefcase3" /></a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li style={{backgroundImage: 'url(images/img12.jpeg)'}}>
                            <div className="overlay" />
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                        <div className="slider-text-inner">
                                            <div className="desc">
                                                <h1>I am <br/>environmentalist a champion of environmental conservation, protection and proper usage and management</h1>
                                                <h2>I am a multi-talented software developer, a strong beliver <a href="https://www.linkedin.com/in/alex-korir-687b3a113/">alex korir</a></h2>
                                                <p><a href="btn btn-primary btn-learn">View Portfolio <em className="icon-briefcase3" /></a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

            </section>
            
        </div>
        )
    }
}