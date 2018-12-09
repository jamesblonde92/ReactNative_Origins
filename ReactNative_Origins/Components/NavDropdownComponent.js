import React from 'react';
import {Text, View, Button, Image, TouchableHighlight} from 'react-native';

import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height





const NavDropdownComponent = props => {

	
	return (
		<View style={{position: 'absolute', flex: 1, top:75, left:0, zIndex: 999, height:400, width:width, marginTop:15, paddingLeft: 30, backgroundColor: '#ccc'}}>
	    	<Text>Nav item</Text>
	    	<Text>Nav item</Text>
	    	<Text>Nav item</Text>
	    	<Text>Nav item</Text>
	    	<Text>Nav item</Text>
	    	<Text>Nav item</Text>
	    	<Text>Nav item</Text>
	    </View>
	);

};

export default NavDropdownComponent;