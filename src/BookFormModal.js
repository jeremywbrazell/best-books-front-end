import React from 'react';
// import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Form from 'react-bootstrap/Form'

class BookFormModal extends React.Component {
    // const {isAuthenticated, user} = useAuth0()
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            bookName: '',
            bookDescription: '',
            bookStatus: ''

        }
    }

    submitBook = async () => {
        console.log(this.props);
        const {user} = this.props.data
        const results = await axios.post('http://localhost:3001/books', { 
            email: user.email, 
            aBook: { name: this.state.bookName, description: this.state.bookDescription, status: this.state.bookStatus } });
        console.log(results);
    }
    render() {
        return ( 
            <>
                <Form>
                    <input onChange={(e) => this.setState({ bookName: e.target.value })} />
                    <input onChange={(e) => this.setState({ bookDescription: e.target.value })} />
                    <input onChange={(e) => this.setState({ bookStatus: e.target.value })} />
                </Form>
                <button onClick={this.submitBook}>
                    Add Book
        </button>
            </>
        )
    }
}

export default BookFormModal;