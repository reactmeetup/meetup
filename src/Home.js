import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Home extends React.Component {
	render() {
		return (
			<Container>
				<Content>
					<Card>
						<CardItem>
							<Body style={styles.container}>
								<Text>Home screen</Text>
								<Button onPress={() => Actions.gifs()} style={styles.btn}>
									<Text style={styles.txt}>Go to gifs</Text>
								</Button>
							</Body>
						</CardItem>
					</Card>
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	btn: {
		alignSelf: 'center',
		margin: 5
	},
	txt: {
		padding: 5,
		color: 'white'
	}
});
