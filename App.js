import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  ScrollView,
  Dimensions,
  Platform,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

import Repo from './components/Repo'
import NewRepoModal from './components/NewRepoModal'

export default class App extends React.Component {
  state = {
    modalVisible: false,
    repos: []
  }

  async componentDidMount() {
    const repos = JSON.parse( await AsyncStorage.getItem('@Minicurso:repositorios') ) || [];
    this.setState({ repos })
  }

  onAddHandler = async (newRepoText) => {
    const repoCall = await fetch(`https://api.github.com/repos/${newRepoText}`);
    const response = await repoCall.json();

    const newRepository = {
      id: response.id,
      thumbnail: response.owner.avatar_url,
      title: response.name,
      author: response.owner.login
    }

    this.setState({
      modalVisible: false,
      repos: [
        ...this.state.repos,
        newRepository
      ]
    })

    await AsyncStorage.setItem('@Minicurso:repositorios', JSON.stringify( this.state.repos ))
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Minicurso GoNative!</Text>
          <TouchableOpacity onPress={ () => { this.setState({modalVisible: true})}}>
            <Text style={styles.headerBtn}>+</Text>
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.repoList}>
          { this.state.repos.map( repo => <Repo key={repo.id} data={repo} /> ) }  
        </ScrollView>
        <NewRepoModal 
          onAdd={ this.onAddHandler } 
          onCancel={ () => this.setState({ modalVisible: false }) } 
          visible={this.state.modalVisible} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  header: {
    height: (Platform.OS === 'ios') ? 80 : 50,
    paddingTop: (Platform.OS === 'ios') ? 30 : 0,
    backgroundColor: '#FFF',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  headerBtn: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  repoList: {
    padding: 16
  },
  
});
