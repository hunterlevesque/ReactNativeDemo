import NewsDetail from './../common/newsDetail';
import ColumnItem from './columnItem';

import React, {
	Component,
} from 'react';
import {
	AppRegistry,
	Text,
	View,
	ListView,
} from 'react-native';

class ColumnList extends Component {
	constructor(props) {
		super(props);
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		this.state = {
			dataSource: ds.cloneWithRows([]),
			show: false,
		};
	}

	render() {
		return (
			<View style={{flex: 1, marginBottom:49}}>
            {
                this.state.show ?
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <ColumnItem row={rowData}
                    onPress={this._loadPage.bind(this, rowData.id)}
                    />}/>: <View></View>
                 }
            </View>
		);
	}

	componentDidMount() {
		this.getData();
	}

	getData() {
		var ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		var that = this;
		var baseURL = 'http://news-at.zhihu.com/api/3/section/1';
		//开启loading
		this.setState({
			show: false
		});

		fetch(baseURL)
			.then((response) => response.json())
			.then((responseData) => {
				if (responseData.stories) {
					this.setState({
						dataSource: ds.cloneWithRows(responseData.stories),
						show: true
					});
				}
			})
			.done();
	}

	_loadPage(id) {
		this.props.navigator.push({
			component: NewsDetail,
			passProps: {
				id: id
			}
		});
	}
}

module.exports = ColumnList;