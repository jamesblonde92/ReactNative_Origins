import React from 'react';
import {Text, View, Button, Image, TouchableHighlight} from 'react-native';

import { Dimensions } from "react-native";

import NavDropdownComponent from './NavDropdownComponent';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height





const NavComponent = props => {

	let navDropdown = <NavDropdownComponent />;

	if (props.navOpen === false) {
		navDropdown = <Text></Text>;
	}

	return (
		<View  style={{position: 'absolute', top: 0, left:0, flex:1, backgroundColor: '#ccc', width:width, height: 75}}>
			<Text style={{marginTop:40}}>This will be the nav component</Text>
			<View style={{height: 25, width: 25, position: 'absolute', top:35, right:15}} >
				<TouchableHighlight onPress={props.onNavClick}>
				<Image
		          style={{width: 25, height: 25}}
		          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
		        />
		        </TouchableHighlight>
	        </View>
	        {navDropdown}
	        
		</View>
	);

};

export default NavComponent;