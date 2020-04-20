import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default class Detail extends Component {
    render() {

        const {match: { params: { id } }, info} = this.props;
        let detailInfo = info.length === 0 ? null : info.find(item => item.show.id.toString() === id);

        if (!detailInfo) {
            return (
                <React.Fragment>
                    <p>cargando información...</p>
                    <Link to="/" className="button__base text__base">Volver al listado</Link>
                </React.Fragment>
            )
        } else {
            const { show: { image: { medium }, name, rating: { average }, summary, genres } } = detailInfo;
            return (
                <div>
                    <p>Id de la serie: {id}</p>
                    <img src={medium} alt={name} />
                    <p>título: {name}</p>
                    <p>puntuación: {average}</p>
                    <p>géneros: {genres.join(', ')}</p>
                    <p>sinopsis:</p>
                    {summary}
                    <br/>
                    <Link to="/" className="button__base text__base">Volver al listado</Link>
                </div>
            )

        }
    }
}
Detail.propTypes = {
    match: PropTypes.object.isRequired,
    info: PropTypes.object.isRequired,
}