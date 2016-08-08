/**
 * Created by heyuanbo on 16/8/5.
 */

import MovieItem from './movieItem';
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
            keywords: '功夫熊猫',
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
            renderRow={(rowData) => <MovieItem row={rowData} />}/>: Util.loading

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
        var baseURL = Service.movie_search + '?count=10&q=' + this.state.keywords;
        //开启loading
        this.setState({
            show: false
        });
        console.log(baseURL);
        fetch(baseURL)
            .then((response) => response.json())
    .then((responseData) => {
            if (responseData.subjects) {
            this.setState({
                dataSource: ds.cloneWithRows(responseData.subjects),
                show: true
            });
        }
    })
    .done();
    },

});