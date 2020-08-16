import React from 'react'
import { View, Text, ViewPropTypes } from 'react-native'

import PropTypes from 'prop-types';

import { Container, Content } from 'native-base';
import { GlobalStyles } from '../themes/GlobalStyles';

const IWrapper = ({
    children,
    backgroundColor,
    isScrolled,
    spacing,
    contentContainerStyle,
    contentStyle,
}) => {
    return (
        <Container
            style={[{ backgroundColor }]}>
            <Content
                scrollEnabled={isScrolled ? true : false}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                style={[{ flex: 1 }, spacing && GlobalStyles.container, contentStyle]}
                contentContainerStyle={contentContainerStyle}>
                {children}
            </Content>
        </Container>
    )
}

IWrapper.propTypes = {
    children: PropTypes.node,
    backgroundColor: PropTypes.string,
    isScrolled: PropTypes.bool,
    spacing: PropTypes.bool,
    contentContainerStyle: ViewPropTypes.style,
    contentStyle: ViewPropTypes.style,
}

IWrapper.defaultProps = {

}

export default IWrapper