import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class CheckBoxInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.task(event.currentTarget.name, event.currentTarget.checked);
    }

    render() {
        const { name, checked, labelText } = this.props;

        return (
            <React.Fragment>
                <label htmlFor={name}>{labelText}</label>
                <input 
                    id={name} 
                    name={name} 
                    type="checkbox" 
                    value={name} 
                    checked={checked}
                    onChange={this.handleChange}
                />  
            </React.Fragment>
        )
    }
}

CheckBoxInput.propTypes = {
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    task: PropTypes.func.isRequired,
    labelText: PropTypes.string.isRequired
}
