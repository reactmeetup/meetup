import React from 'react';
import { connect } from 'react-redux';
import { Image, TouchableOpacity, TouchableHighlight, Share, View, StyleSheet } from 'react-native';
import { favorite } from '../redux/actions';

const favoritePng = require('../../assets/favorite.png');
const unfavoritePng = require('../../assets/unfavorite.png');

class Tile extends React.Component {
	render() {
		const { item, size } = this.props;
		const { url } = item.images.preview_gif;
		return (
			<View>
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
				<TouchableHighlight onPress={() => this.props.favorite(item)}>
					<Image source={this.props.isFavorite ? favoritePng : unfavoritePng} style={styles.favoriteBtn} />
				</TouchableHighlight>
			</View>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	isFavorite: state.favorites.findIndex((tmp) => tmp.id === ownProps.item.id) !== -1
});

export default connect(mapStateToProps, { favorite })(Tile);

const styles = StyleSheet.create({
	favoriteBtn: {
		width: 32,
		height: 32,
		position: 'absolute',
		bottom: 5,
		right: 5
	}
});
