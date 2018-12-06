import React from 'react';
import {Text, View, Button} from 'react-native';



const NewComponent = props => {
	return (
		<View>
			<Text>
				hello {props.toSend}
			</Text>
			<Button onPress={props.handleToggle}>Click me!</Button>
		</View>
	);

};

export default NewComponent;