# ReactNative


###相关问题的分析	
								
####1.onlyChild must be passed children with exactly one child
这个问题其实就是一个组件需要的属性或者子组件没有设置


####2.我们经常需要去创建别的页面，在有的文件里需要引入之前创建的页面，因为我们在RN里面有一个组件化的概念，所以我们创建的也可以乘坐组件，当此组件有可能被别的文件使用时，我们要使用module.exports，如下操作
	module.exports = React.createClass({
	getInitialState() {
       return {
           dataSource: ds.cloneWithRows([]),
           keywords: 'c语言',
           show: false
       };
    },
    render() {
        return (
            <View style={{flex: 1 ,backgroundColor:'green'}}>
            </View>
        );
    }
});

####3.当我们创建组件，有两种方法，一种是React.createClass({}），还有一种是class DouBanApp extends Component，这两种需要注意：
||初始化state等属性的时候是不一样的


	React.createClass({
		getInitialState() {	}
	}）
	
	class DouBanApp extends Component {
	constructor(props) {
    	super(props);
    	
    	
    	



    
