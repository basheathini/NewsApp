/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import { FlatList } from 'react-native'
import { getNews } from './src/news'
import Article from './src/components/Article'

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = { articles: [], refreshing: true}
    this.fetchNews = this.fetchNews.bind(this)
  }

  componentDidMount(){
    this.fetchNews()
  }
  componentDidCatch(){}
  componentDidUpdate(){}
  componentWillMount(){}
  componentWillReceiveProps(){}
  componentWillUnmount(){}
  componentWillUpdate(){}
  

  fetchNews(){
    getNews()
    .then(articles => this.setState({ articles, refreshing: false }))
    .catch(() => this.setState( {refreshing: false }))
  }

  handleRefresh(){
    this.setState(
      { refreshing: true }, 
      () => this.fetchNews())
  }
  render(){
    return(
      <FlatList data = { this.state.articles } 
        renderItem = { ({ item }) => <Article article = { item }/> } 
        keyExtractor = { item => item.url } 
        onRefresh = { this.handleRefresh.bind(this)} 
        refreshing = { this.state.refreshing }
        />
    )
  }
}
