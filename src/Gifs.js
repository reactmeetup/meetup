import React from 'react';
import { Text, Keyboard } from 'react-native';
import { Container, Header, Item, Input, Icon, Button } from 'native-base';
import search from './api';
import List from './reusable/List';

export default class Gifs extends React.Component {
	constructor() {
		super();
		this.state = { data: [] };
		this.searchQuery = '';
	}

	_search = () => {
		this.setState({ data: [] });
		Keyboard.dismiss();
		return search(this.searchQuery).then((response) => {
			//console.log(response.data);
			this.setState({ data: response.data });
		});
	};

	render() {
		return (
			<Container>
				<Header searchBar rounded>
					<Item>
						<Icon name="ios-search" />
						<Input
							placeholder="Search"
							onChangeText={(text) => {
								this.searchQuery = text;
							}}
							onEndEditing={this._search}
						/>
						<Icon name="ios-people" />
					</Item>
					<Button transparent onPress={this._search}>
						<Text>Search</Text>
					</Button>
				</Header>
				<List data={this.state.data} numColumns={3} />
			</Container>
		);
	}
}
