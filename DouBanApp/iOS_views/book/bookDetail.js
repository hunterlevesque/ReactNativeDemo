/**
 * Created by heyuanbo on 16/8/8.
 */
import React, {
    Component,
} from 'react';

import {
    AppRegistry,
    View,
    Text,
} from 'react-native';

class bookDetail extends Component {
    render() {
        return (
          <View style={{flex: 1, backgroundColor:'red'}}>
                <Text style={{fontSize:25}}>{'书的id为'+this.props.id + '左划返回'}</Text>
            </View>
        );
    }
}

module.exports = bookDetail;