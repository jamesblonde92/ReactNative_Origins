import React from 'react';
import {Text, View} from 'react-native';



const NewComponent = props => {
	return (
		<View>
			<Text>
				hello {props.toSend}
			</Text>
			<Text>
				hello
			</Text>
		</View>
	);

};

export default NewComponent;