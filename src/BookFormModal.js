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
            newBook:{bookName: '',
                    bookDescription: '',
                    bookStatus: '',},
            badBook: ''

        }
    }

    submitBook = async () => {
        console.log(this.props);
        const user = this.props.auth0.user;
        const results = await axios.post('http://localhost:3001/books', {
            email: user.email,
            aBook: {name: this.state.newBook.bookName, description: this.state.newBook.bookDescription, status: this.state.newBook.bookStatus}
        })
        return results;
    }

    deleteBook = async () => {
        this.props.handleDelete(this.state.badBook);
        const user = this.props.email;
        const target = this.props.index;
        console.log(target);
        const newLib = await axios.delete(`localhost:3001/books/${target}`,
            {params: {
                email: user,
                index: target}
            })
            const updated = newLib.filter((book, i) => {
                return i !== target;
            })
            this.props.updateLib(updated);
    }

    render() {
        return (
            <>
                <Form>
                    <input placeholder="title" onChange={(e) => this.setState({newBook:{...{name: this.state.newBook}, bookName: e.target.value}})} />
                    <input placeholder="description" onChange={(e) => this.setState({newBook:{...this.state.newBook, bookDescription: e.target.value}})} />
                    <input placeholder="status" onChange={(e) => this.setState({newBook:{...this.state.newBook, bookStatus: e.target.value}})} />
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