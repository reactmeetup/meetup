import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Content, Card, CardItem, Body, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import List from './reusable/List';

class Home extends React.Component {
    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem>
                            <Body style={styles.container}>
                                <Text>Home screenfdsfd</Text>
                                <Button onPress={() => Actions.gifs()} style={styles.btn}>
                                    <Text style={styles.txt}>Go to gifs</Text>
                                </Button>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
                <List data={this.props.favorites} numColumns={1} />
            </Container>
        );
    }
}

const mapStateToProps = ({ favorites }) => ({ favorites });

export default connect(mapStateToProps)(Home);

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
