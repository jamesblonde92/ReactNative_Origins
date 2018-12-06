import React from 'react';
import { Button } from 'react-native';


const fetchLocation = props => {
	return (
			<Button title ="Dude, I'm a button!" onPress={props.onGetLocation} />
	);

};

export default fetchLocation;