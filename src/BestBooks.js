
import React from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import Carousel from 'react-bootstrap/Carousel'




class BestBooks extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bookData: [],

        }
    }
    

    handleBooks = async(id) => {
        // const SERVER = process.env.PORT;
        const { user , hasAuth } = this.props.auth0;
        await axios.get('http://localhost:3001/booker', { params: { email: id } }).then(lib => {
            const data = lib.data;
            this.setState({ bookData: data.books })
            console.log("handleBooks data: ", data);
        }).catch(error => { console.log('Something went wrong!', error) });
    }
    componentDidMount = () => {
        const user = this.props.auth0;
        console.log(user);
        if (this.props.auth0){this.handleBooks(user.email)};
        console.log("state: ", this.state.bookData)
    };
    render() {
        return (
            <>
  
                   
                       <Carousel>
                     
                    {this.state.bookData.map((el,i)=> {return (
                    <Carousel.Item key={i}>
                    <img
                        className="d-block w-100"
                        src=""
                        alt={i}
                    />
                    <Carousel.Caption>
                        <h3>{el.title}</h3>
                        <p>{el.description}</p>
        
                    </Carousel.Caption>
                    </Carousel.Item>)
                })
                }
                </Carousel>

                
            </>
        )
    
}
}

export default withAuth0(BestBooks);