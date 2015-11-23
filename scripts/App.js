import React, {Component,View,Text,TouchableOpacity} from 'react-native-for-web';

class Test extends Component {
	 render() {
	 	console.log('render test')
    return (
      <TouchableOpacity onPress={() => console.log('ok clicked')}>
       <Text> Click me! </Text>
      </TouchableOpacity>
    );
  }

  componentWillReceiveProps(nextProps) {
    console.log("next props2 $$$$$$$$$$$$$$  "+ nextProps.name)
  }

}


export default class App extends Component {
  render() {
    return (
      <View>
        <Text> Parent Text </Text>
       <Test name={'hello'}> </Test>
      </View>
    );
  }
}
