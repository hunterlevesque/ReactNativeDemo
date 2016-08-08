/**
 * Created by heyuanbo on 16/8/5.
 */

import BookItem from './bookItem';
import Service from './../common/service';
import Util from './../common/util';


import React, {
    Component,
} from 'react';

import {
    AppRegistry,
    View,
    Text,
    ListView,
    Image,
} from 'react-native';

module.exports = React.createClass({
    getInitialState() {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {
            dataSource: ds.cloneWithRows([ ]),
            keywords: 'c语言',
            show: false
        };
    },

    render() {
        return (
            <View style={{flex: 1, marginBottom:49}}>
            {
                this.state.show ?
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <BookItem row={rowData} />}/>: Util.loading

            }

            </View>
        );
    },

    componentDidMount() {
        this.getData();
    },


     getData() {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        var that = this;
        var baseURL = Service.book_search + '?count=10&q=' + this.state.keywords;
        //开启loading
        this.setState({
            show: false
        });

         fetch(baseURL)
             .then((response) => response.json())
            .then((responseData) => {
             if (responseData.books) {
             this.setState({
                 dataSource: ds.cloneWithRows(responseData.books),
                 show: true
             });
         }
     })
     .done();
    },

});