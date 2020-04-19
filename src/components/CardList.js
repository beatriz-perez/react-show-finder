import React, { Component } from 'react'
import PropTypes from 'prop-types';

// Componentes:
import Card from './Card';

export default class CardList extends Component {

    listStyle() {
        return{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            alignItems: 'flex-start'
        }
    }

    render() {

        const generateJSX = (item, index) => {
            const {show:{ image:{medium}, name, rating:{average}, status }} = item;
            return(
              <Card 
                key = {index}
                img = {medium}
                title = {name}
                rating = {average}
                status = {status}
              />
            )
        }
        const {apiInfo} = this.props.info;
        const JSXArray = apiInfo.map(generateJSX);

        return (
            <ul className="card--list" style={this.listStyle()}>
                {JSXArray}
            </ul>
        )
    }
}
CardList.propTypes = {
    info: PropTypes.object.isRequired
}