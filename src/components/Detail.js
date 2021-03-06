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
                    <p className="text__base">cargando información...</p>
                    <Link to="/" className="button__base text__base">Volver al listado</Link>
                </React.Fragment>
            )
        } else {
            const { show: { image: { medium }, name, rating: { average }, summary, genres } } = detailInfo;
            return (
                <div className="detail__infoBox text__base">
                    <p><span className="text__base--upperBold">Id de la serie:</span> {id}</p>
                    <img src={medium} alt={name} />
                    <p className="text__base--bold">título:</p>
                    <p>{name}</p>
                    <p><span className="text__base--bold">puntuación:</span> {average}</p>
                    <p><span className="text__base--bold">géneros:</span> {genres.join(', ')}</p>
                    <p className="text__base--bold">sinopsis:</p>
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
    info: PropTypes.array.isRequired,
}