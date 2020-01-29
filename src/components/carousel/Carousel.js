import React, { Component } from 'react'
import '../carousel/Carousel.css'
import cat from '../../../src/slide_images/cats_slide.jpg'
import dog from '../../../src/slide_images/schnauzer.jpg'


export default class Carousel extends Component {

    render(){

        const imgs ={
            
        }

        return(
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner images-slide-container">
                <div className="carousel-item active">
                    <img src={cat} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={dog} className="d-block w-100" alt="..." />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
        )
    }
}