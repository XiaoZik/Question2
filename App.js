import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useState, useRef } from 'react';
import RowItem from './components/rowItem';
import AddTodo from './components/addColor';

export default function App() { 
    const flatList = useRef(null)
    const [largestData, setData] = useState(0);
    const [colorRow, setRow] = useState([
      {text: null, key: null}
    ])
    const[tick, setTick] = useState(null);
    const[index, setIndex] = useState(0);

    function clearData(){
      setRow(() => {
        return [
          { text: null, key: null}
        ];
      });
    }

    function colorRandomized() {
      clearInterval(tick);
      var timerID = setInterval(clearData, 15000);
      setTick(timerID);
      const color = [
        'lightseagreen',
        'firebrick',
        'lightpink',
        'maroon',
        'cornflowerblue',
        'burlywood',
        'darkslateblue',
        'lightcoral',
        'orange',
        'darksalmon',
        ];
 

      const max = color.length - 1;
      const min = 0;
      var chosenColor = color[Math.floor(Math.random() * (max - min + 1)) + min];
      setRow(prevRow => {
        return [
          ...prevRow,
          { text: chosenColor, key: Math.random().toString() }
          
        ];
      });
      setIndex(index+1);
      if(colorRow.length > largestData){
        setData(colorRow.length)
      }
    }

    const pressHandler = () => {
      clearInterval(tick);
      var timerID = setInterval(clearData, 15000);
      setTick(timerID);
      if(colorRow[colorRow.length-1].text != null){
        const lastIndex = colorRow.length-1;
        const chosenKey = colorRow[lastIndex].key;
        setRow(prevRow => {
          return prevRow.filter(row => row.key != chosenKey);
        });
        if(index == 0){
          return;
        }else{
          setIndex(index-1);
        }
      }
    };
  return (
    <View style={styles.container}>
      <View style = {styles.listHeight}>
      <FlatList 
        ref={flatList}
        onContentSizeChange={() => {
          flatList.current.scrollToEnd();
        }}
        data = {colorRow}   
        renderItem = {({item}) => (
          item.text != null ? 
          <RowItem item = {item}/> : ''
        )}
        />
      </View>
      
        <View style = {styles.counter}>
          <View style = {styles.column}><Text>Current: {colorRow.length-1}
           </Text></View>
          <View style = {styles.column}><Text>Largest: {largestData} </Text></View>
          </View>
        <View style= {styles.button}>
        <AddTodo color = {'red'} title = {'Remove'} submitHandler={pressHandler}/>
        <AddTodo color = {'green'} title = {'Push'} submitHandler={colorRandomized}/>

        </View>
  

    </View>
  
  );
  
}

const styles =  StyleSheet.create({
  container: {
    paddingTop: 35,
    width: '100%',
    flex: 1
  },

  listHeight:{
    height:'85%'
  },
  
  button: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: "center"
  },

  counter: {
    position: 'absolute',
    bottom: 0,
    paddingBottom: 50,
    flexDirection: 'row',
    position: 'absolute',
    width: '100%',
    justifyContent: "space-evenly"
  },
  column:{
  }
});