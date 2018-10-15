import React from 'react';
import { Image, TouchableOpacity, Share } from 'react-native';

export default class Tile extends React.Component {
	render() {
		const { item, size } = this.props;
		const { url } = item.images.preview_gif;
		return (
			<TouchableOpacity
				onPress={() => {
					Share.share({
						message: 'Check this awesome GIF!!!!',
						title: 'GIF',
						url
					});
				}}
			>
				<Image source={{ uri: url }} style={{ width: size, height: size }} />
			</TouchableOpacity>
		);
	}
}
