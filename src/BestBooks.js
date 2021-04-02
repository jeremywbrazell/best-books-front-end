
import React from 'react';

import { withAuth0 } from '@auth0/auth0-react';
import Carousel from 'react-bootstrap/Carousel';
import './BestBooks.css';
import './AAA.jpg'

class BestBooks extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

        tempCard = (inp) => {
            return (
                    <Carousel.Item>
                        <h3>{inp.name}</h3>
                        <p>{inp.description}</p>
                    </Carousel.Item>
            )
        }


    render() {
        return (
                   
                    <Carousel className='fav-books-car'>
                     {this.props.data.map(el=>{
                          <Carousel.Item>
                          <h3>{el.name}</h3>
                          <p>{el.description}</p>
                          <p>{el.status}</p>
                            </Carousel.Item>
                     })}
                    </Carousel>   
                )


                }
        
}

export default withAuth0(BestBooks);