
// var BookList = require('./iOS_views/book/bookList');
import BookList from './iOS_views/book/bookList';
import MovieList from './iOS_views/movie/movieList';
import MusicList from './iOS_views/music/musicList';
import Navigation from './iOS_views/common/navigation';

import React, {
  Component,
} from 'react';

import {
  AppRegistry,
  Text,
  View,
  TabBarIOS,
  StatesBarIOS,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

class DouBanApp extends Component {
  //因为这个类我使用的是 extends,所以不能用getInitialState,而是要用constructor这个函数
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: '书',
    }
  }

  render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item title='书' icon={require('./source/book.png')} selected={this.state.selectedTab === '书'} onPress={()=>{this.setState({selectedTab: '书'})}}>
            <Navigation component={BookList} />
        </TabBarIOS.Item>
        <TabBarIOS.Item title='电影' icon={require('./source/movie.png')} selected={this.state.selectedTab === '电影'} onPress={()=>{this.setState({selectedTab: '电影'})}}>
            <Navigation component={MovieList} />
         </TabBarIOS.Item>
        <TabBarIOS.Item title='音乐' icon={require('./source/music.png')} selected={this.state.selectedTab === '音乐'} onPress={()=>{this.setState({selectedTab: '音乐'})}}>
              <Navigation component={MusicList} />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

var styles=StyleSheet.create({
  firstView: {
    flex: 1,
    backgroundColor: 'red',
  },
  secondView: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  thirdView: {
    flex: 1,
    backgroundColor: 'blue',
  },
})


AppRegistry.registerComponent('DouBanApp', ()=>DouBanApp);