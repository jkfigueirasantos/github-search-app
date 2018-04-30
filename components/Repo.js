import React from 'react'

import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'

export default class Repo extends React.Component {
  render() {
    return(
      <View style={styles.repo}>
        <Image
          style={styles.repoImage} 
          source={{uri: this.props.data.thumbnail}} />
          <View style={styles.repoInfo}>
            <Text style={styles.repoTitle}>{this.props.data.title}</Text>
            <Text style={styles.repoauthor}>{this.props.data.author}</Text>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  repo: {
    flex: 1,
    flexDirection: 'row',
    padding: 32,
    backgroundColor: '#FFF',
    marginBottom: 20,
    borderRadius: 5,
  },
  repoImage: {
    width: 50,
    height: 50,
    marginRight: 16,
    borderRadius: 25,
  },
  repoInfo: {
    flex: 1
  },
  repoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4
  }
})