import React from 'react';
import {Text, View, Button} from 'react-native';



const NewComponent = props => {
	return (
		<View>
			<Text>
				hello {props.toSend}
			</Text>
			<Button title="click me" onPress={props.handleToggle}></Button>
		</View>
	);

};

export default NewComponent;