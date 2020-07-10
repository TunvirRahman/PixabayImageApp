import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import styled from 'styled-components/native';

const StyledView = styled.View`
  background-color: papayawhip;
  flex:1
`;

class HomeScreen extends React.Component {
    render() {
        return (
            <StyledView>
                <Text>Home Screen</Text>
            </StyledView>

        );
    }
}

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
    },
});

export default createAppContainer(AppNavigator);
