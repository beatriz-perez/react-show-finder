import React, { Component } from 'react'
import PropTypes from 'prop-types';

// Componentes:
import TextInput from './TextInput';
import CheckBoxInput from './CheckBoxInput';

export default class Filters extends Component {

    render() {

        const {task, info:{statusFilter, textFilter}} = this.props;

        return (
            <form className="filtersForm">
                <TextInput 
                    name="textFilter" 
                    task={task} 
                    value={textFilter} 
                    labelText="filtrar por contenido del título: "
                />

                <CheckBoxInput 
                    name="statusFilter" 
                    task={task} 
                    checked={statusFilter}
                    labelText="ver sólo series en curso"
                />
            </form>
        )
    }
}

Filters.propTypes = {
    task: PropTypes.func.isRequired,
    info: PropTypes.object.isRequired
}
