import React from 'react';
import {Text, View, Button, Image} from 'react-native';





const NewComponent = props => {
	return (
		<View style={{height:200, marginTop: 25}}>
			<Text>
				hello {props.toSend}
			</Text>
			<View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
				<View style={{height: 50, width: 50}}>
					<Image
			          style={{width: 50, height: 50}}
			          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
			        />
		        </View>
	        </View>
			<Button title="click me" style={{zIndex:1}} onPress={props.handleToggle}></Button>
		</View>
	);

};

export default NewComponent;