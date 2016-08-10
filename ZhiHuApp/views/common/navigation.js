import React, {
	Component,
} from 'react';

import {
	Navigator,
	Text,
	View,
} from 'react-native';

module.exports = React.createClass({
	render() {
		return ( < Navigator initialRoute = {
				{
					name: '',
					component: this.props.component,
					index: 0,
				}
			}
			configureScene = {
				() => {
					return Navigator.SceneConfigs.PushFromRight;
				}
			}
			renderScene = {
				(route, navigator) => {
					let Component = route.component;
					return (
						<View style={{flex: 1,marginTop: 20}}>
    			      <Component navigator={navigator} route={route} {...route.passProps}/>
    			    </View>
					);
				}
			}
			/>
		);
	}
});