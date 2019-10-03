import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import TabMenu from '../../Components/TabMenu';
import {Container, Content, Text} from 'native-base';


type Props = {};

export default class HomeScreen extends Component<Props> {
  static navigationOptions = ({navigation}) => {
    const params = navigation.state.params || {};
    return {
      title: 'Home',
      headerRight: <Text />,
    };
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <View style={{alignItems: 'center', marginTop: 50}}>
            <Text>Hello World Home</Text>
          </View>
        </Content>
        <TabMenu navigator={this.props.navigation} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
