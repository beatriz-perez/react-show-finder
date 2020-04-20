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
        console.log(this.props);

        const generateJSX = (item, index) => {
            const {show:{ id, image:{medium}, name, rating:{average}, status }} = item;
            return(
              <Card 
                id = {id}
                key = {index}
                img = {medium}
                title = {name}
                rating = {average}
                status = {status}
              />
            )
        }
        const {apiInfo, statusFilter, textFilter} = this.props.info;
        const JSXArray = apiInfo
            .filter(item => textFilter === "" || item.show.name.toLowerCase().includes(textFilter.toLowerCase()))
            .filter(item => statusFilter === false || item.show.status === "Running")
            .map(generateJSX)
        ;

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