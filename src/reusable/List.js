import React from 'react';
import { FlatList, Dimensions } from 'react-native';
import Tile from './Tile';

const { width } = Dimensions.get('window');

export default class List extends React.Component {
	_renderItem = ({ item }) => {
		const size = width / this.props.numColumns;
		return <Tile item={item} size={size} />;
	};

	render() {
		return (
			<FlatList
				renderItem={this._renderItem}
				data={this.props.data}
				numColumns={this.props.numColumns}
				keyExtractor={(item, index) => String(index)}
			/>
		);
	}
}
