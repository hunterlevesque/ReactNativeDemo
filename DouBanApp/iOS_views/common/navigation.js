import React, {
    Navigator,
    View
} from 'react-native';

module.exports = React.createClass({
    render: function () {
        return(
            <Navigator
            initialRoute={{name:'', component: this.props.component, index:0}}>
            </Navigator>
        );
    }
})
