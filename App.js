import React, {useState} from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Header from './src/Header';
import ToDoItem from './src/ToDoItem';
import AddToDo from './src/AddToDo';

const ToDo = () => {
  const [todo, setTodo] = useState([
    {text: 'buy tea', key: '1'},
    {text: 'create an app', key: '2'},
    {text: 'playing games', key: '3'},
  ]);

  const pressHandler = key => {
    setTodo(prevToDo => {
      return prevToDo.filter(todo => todo.key != key);
    });
  };

  const submitHandler = text => {
    if (text.length > 3) {
      setTodo(prevToDo => {
        return [{text: text, key: Math.random().toString()}, ...prevToDo];
      });
    } else {
      Alert.alert('OOPS!', 'ToDo must be over 3 characters long', [
        {text: 'Understood', onPress: () => console.log('alert closed')},
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log('dismisses keyboard');
      }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddToDo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todo}
              renderItem={({item}) => (
                <ToDoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
});

export default ToDo;
