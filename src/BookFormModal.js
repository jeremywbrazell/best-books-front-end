import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Form from 'react-bootstrap/Form'

class BookFormModal extends React.Component {
    // const {isAuthenticated, user} = useAuth0()
    constructor(props) {
        super(props)
        this.state = {
            email: this.props.email,
            bookName: '',
            bookDescription: '',
            bookStatus: '',
            badBook: ''

        }
    }

    submitBook = async () => {
        console.log(this.props);
        const user = this.props.auth0.user;
        const results = await axios.post('http://localhost:3001/books', {
            email: user.email,
            aBook: { name: this.state.bookName, description: this.state.bookDescription, status: this.state.bookStatus }
        })
        return results;
    }
    deleteBook = async () => {
        const user = this.props.auth0.user;
        await axios.delete('localhost:3001/books',
            {
                email: user.email,
                title: this.state.badBook
            })
    }

    render() {
        return (
            <>
                <Form>
                    <input placeholder="title" onChange={(e) => this.setState({ bookName: e.target.value })} />
                    <input placeholder="description" onChange={(e) => this.setState({ bookDescription: e.target.value })} />
                    <input placeholder="status" onChange={(e) => this.setState({ bookStatus: e.target.value })} />
                </Form>
                <button onClick={this.submitBook}>
                    Add Book
                </button>
                <Form>
                    <input placeholder='delete?' onChange={(e) => this.setState({ badBook: e.target.value })}></input>
                </Form>
                <button onClick={this.deleteBook}>
                    Delete
        </button>
            </>
        )
    }
}

export default withAuth0(BookFormModal);