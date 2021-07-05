import React from 'react';
import {  FlatList } from 'react-native';
import CategoryList from '../component/CategoryList';

export default class Category extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      category: [
        {
          id : "1" ,
          name : "Nước ngọt"
        },
        {
          id : "2" ,
          name : "Bánh"
        },
        {
          id : "3" ,
          name : "Rau"
        }
      ]
    }
  }
  render(){
    const {category} = this.state;
    return(
      <FlatList
        data={category}
        renderItem={({item}) => <CategoryList category={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={{paddingLeft:150,paddingRight:100,paddingTop:200}}
      ></FlatList>
    );
  }
}
