
import React from 'react';

import { withAuth0 } from '@auth0/auth0-react';
import Carousel from 'react-bootstrap/Carousel';
import './BestBooks.css';
import nonProd from './AAA.jpg';

class BestBooks extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    

    render() {
        return (
                    <Carousel className='fav-books-car'>
                     {this.props.data.map(el=>(
                        
                          <Carousel.Item className="carousel-inner">
                            <img src={nonProd} title="Holding" className="d-block w-100" alt="non-PROD" />
                            <Carousel.Caption>
                                <h3>{el.name}</h3>
                                <p>{el.description}</p>
                                <p>{el.status}</p>
                            </Carousel.Caption>
                          </Carousel.Item> 
                     ))}
                    </Carousel>   
                )


                }
        
}

export default withAuth0(BestBooks);