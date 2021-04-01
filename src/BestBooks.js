
import React from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import Carousel from 'react-bootstrap/Carousel';
import './BestBooks.css';
import './AAA.jpg'

class BestBooks extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bookData:[],
        }
    }
    
    handleBooks = async(id) => {
        const { user } = this.props.auth0;
        await axios.get('http://localhost:3001/books', { params: { email: user.email } }).then(lib => {
            const data = lib.data[0];
            this.setState({ bookData: data.books })
            console.log("handlebook state setted: ",this.state.bookData)
        }).catch(error => { console.log('Something went wrong!', error) });
    }

    componentDidMount = () => {
        const user = this.props.auth0;
        this.handleBooks(user.user.email)
    };

        // tempCard = () => {
        //     return (
                
                   
        //             <Carousel.Caption>
        //                 <h3>{this.state.bookData[0].name}</h3>
        //                 <p>{this.state.bookData[0]}</p>
        
        //             </Carousel.Caption>
                   
        //     )
        // }


    render() {
        return (
                   
                    <Carousel className='fav-books-car'>
                     <Carousel.Item>
                    <img
                        className="d-block w-100"
                        width="100px"
                        height="100px"
                        src="AAA.jpg"
                        alt='shkbvd'
                    />
                          <Carousel.Caption>
                        <h3>{this.state.bookData[0].name}</h3>
                        <p>{this.state.bookData[0]}</p>
        
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        width="100px"
                        height="100px"
                        src="AAA.jpg"
                        alt='shkbvd'
                    />
                          <Carousel.Caption>
                        <h3>{this.state.bookData[1]}</h3>
                        <p>{this.state.bookData[1]}</p>
        
                    </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>   
                )


                }
        
}

export default withAuth0(BestBooks);