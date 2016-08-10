import React, {
	Component,
} from 'react';
import {
	Text,
	View,
	WebView,
} from 'react-native';

class NewsDetail extends Component {

	render() {
		var url = 'http://news-at.zhihu.com/api/4/news/' + this.props.id;
		return (
			<WebView
        	 source={{uri: url}}
        	 style={{marginTop: 20}}
      		/>
		);
	}

	// componentDidMount() {
	// 	this.getData();
	// }


	// getData() {
	// 	var ds = new ListView.DataSource({
	// 		rowHasChanged: (r1, r2) => r1 !== r2
	// 	});
	// 	var that = this;
	// 	var baseURL = 'http://news-at.zhihu.com/api/4/news/' + this.props.id;
	// 	var baseURL = Service.book_search + '?count=10&q=' + this.state.keywords;
	// 	//开启loading
	// 	this.setState({
	// 		show: false
	// 	});

	// 	fetch(baseURL)
	// 		.then((response) => response.json())
	// 		.then((responseData) => {
	// 			// this.alertObj(responseData.books);
	// 			console.log(responseData);
	// 			if (responseData.books) {
	// 				this.setState({
	// 					dataSource: ds.cloneWithRows(responseData.books),
	// 					show: true
	// 				});
	// 			}
	// 		})
	// 		.done();
	// }

	// _loadPage(id) {
	// 	this.props.navigator.push({
	// 		component: BookDetail,
	// 		passProps: {
	// 			id: id
	// 		}
	// 	});
	// }
}

module.exports = NewsDetail;