
import React, {
    Component,
} from 'react';

import {
    View,
    Text,
    Image,
    TouchableHighlight,
} from 'react-native';

class MovieItem extends Component {
    render() {
        var row = this.props.row;
        return (
            <View style={{ height:120, flexDirection: 'row'}} >
    <Image source={{uri:row.images.medium}}
        style={{width:80 ,
            height:100,
            marginLeft:15,
            marginTop:15,
        }}></Image>
        <Text  style={{alignItems: 'center', fontSize:15, marginTop: 15,marginLeft:5, marginRight:5}} numberOfLines={0}>
            {row.title}
    </Text>
        </View>
    );
    }
}

module.exports = MovieItem;