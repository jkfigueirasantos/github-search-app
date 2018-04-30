import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Modal,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class NewRepoModal extends React.Component {
  state = {
    newRepoText: ''
  }

  render() {
    return (
      <Modal 
        animationType="fade" 
        visible={this.props.visible} 
        transparent={true} 
        style={styles.container}
        >
        <View style={styles.modalContainer}>
          <View style={styles.boxContainer}>
            <Text style={styles.boxTitle}>Adicionar repositório</Text>
            <TextInput 
              autoFocus 
              autoCapitalize="none" 
              style={styles.boxInput} 
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="organização/reponsitório"
              value={this.state.newRepoText} 
              onChangeText={ text => this.setState({newRepoText: text})} 
              />
            <View style={styles.buttonContainer}>
              <TouchableOpacity 
                onPress={ this.props.onCancel }
                style={[styles.button, styles.btnCanc]}>
                <Text style={styles.btnLabel}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.button, styles.btnAdd]}
                onPress={ () => this.props.onAdd(this.state.newRepoText) }>
                <Text style={styles.btnLabel}>Adicionar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    width: 280,
    padding: 20,
  },
  boxTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center'
  },
  boxInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#CCC',
    width: '100%',
    marginTop: 16,
    marginBottom: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
  },
  btnCanc: {
    backgroundColor: '#E25f5f',
  },
  btnAdd: {
    backgroundColor: '#70bd85',
  },
  btnLabel: {
    color: 'white',
    fontWeight: 'bold'
  }
  
});
