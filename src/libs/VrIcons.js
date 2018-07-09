import React, { Component } from 'react'
import { StyleProvider, getTheme, Icon } from 'native-base'
import PropTypes from 'prop-types';


export default class MIcons extends Component {

    static propTypes = {
        family: PropTypes.any,
        name: PropTypes.any,
        style: PropTypes.any
    }

    render() {
        const { family, name, style } = this.props
        const icon = <Icon name={name} style={style} />
        if (family) {
            const customTheme = getTheme({ iconFamily: family })
            return <StyleProvider style={customTheme}>{icon}</StyleProvider>
        } else {
            return icon
        }
    }
}