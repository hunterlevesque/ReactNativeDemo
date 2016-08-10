/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import HomeList from './views/home/homeList';
import DayNewsList from './views/dayNews/dayNewsList';
import ColumnList from './views/column/columnList';
import Navigation from './views/common/navigation';

import React, {
  Component
} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
} from 'react-native';

class ZhiHuApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: '首页',
    };
  }

  render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item title='首页' selected={this.state.selectedTab === '首页'} 
        onPress={()=>{this.setState({selectedTab: '首页'})}}>
          <Navigation component={HomeList} />
        </TabBarIOS.Item>
        <TabBarIOS.Item title='日报' selected={this.state.selectedTab === '日报'}
         onPress={()=>{this.setState({selectedTab: '日报'})}}>
            <Navigation component={DayNewsList} />
         </TabBarIOS.Item>
        <TabBarIOS.Item title='栏目' selected={this.state.selectedTab === '栏目'} 
        onPress={()=>{this.setState({selectedTab: '栏目'})}}>
             <Navigation component={ColumnList} />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('ZhiHuApp', () => ZhiHuApp);