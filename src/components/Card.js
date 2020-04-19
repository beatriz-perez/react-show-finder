import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Card extends Component {
    render() {
        console.log(this.props);

        const {img, title, rating, status} = this.props;
        return (
            <Link to='/'>
                <div className="card">
                    <img src={img} alt={title}/>
                    <p>{title}</p>
                    <p>{rating}</p>
                    <p>{status}</p>
                </div>
            </Link>
        )
    }
}
Card.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
}