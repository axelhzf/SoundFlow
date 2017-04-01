import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import colors from '../../style/colors'

export default class ProfileSectionHeader extends Component {

    render() {
        return (
            <View>
                <Text style={styles.header}>{this.props.title}</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    header: {
        fontSize: 26,
        color: colors.pink,
        marginLeft: 10
    }
});