/**
 * Created by heyuanbo on 16/8/8.
 */
import React, {
    Component,
} from 'react';

import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

class bookList extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state= {
    //         title:'',
    //     }
    // }

    render() {
        var row = this.props.row;
        return (
            <TouchableOpacity style={[styles.row, styles.item]} {...this.props}>
            <View style={{ height:120, flexDirection: 'row'}} >
                <Image source={{uri:row.image}}
                style={{width:80 ,
                    height:100,
                    marginLeft:15,
                    marginTop:15,
                }}></Image>
                <View style={{flexDirection:'column'}}>
                    <Text  style={{alignItems: 'center', fontSize:18, marginTop: 15,marginLeft:5, marginRight:5}}
                    numberOfLines={0}>
                        {row.title}
                    </Text>
                    <Text style={{fontSize:14, marginLeft:5, marginTop: 5}} numberOfLines={2}>
                        {row.author}
                    </Text>
                </View>

            </View>
        </TouchableOpacity>
        );
    }
}


var styles = StyleSheet.create({
    row:{
        flexDirection:'row'
    },
    item:{
        height:120,
        marginTop:5,
        marginBottom:5,
        borderColor:'#ccc'
    },
});

module.exports = bookList;