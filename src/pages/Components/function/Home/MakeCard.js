import React, { Component } from 'react';
import { Skeleton, Card, } from 'antd';
import axios from 'axios';

const { Meta } = Card;

export default class MakeCard extends Component {
  state = {
    loading: true,
    Card_Data : 0,
  };

  async componentDidMount() {
    await axios.get(`http://163.152.223.12:3030/sort/?collection=DATA_mainpage`)
    .then(res => {
      this.setState({
        Card_Data : parseInt(res.data[0][this.props.match_key],10)
      })
    })
    this.setState({
      loading: false
    })
  }

  render() {
    return (
        <Skeleton loading={this.state.loading} avatar active>
        <Card title={this.props.match_key ? this.props.match_key : ''}
        style={{ width: 250, height: 150, margin: 16 }} loading={this.state.loading} size='medium'>
          <p>{this.state.Card_Data ? this.state.Card_Data : ''}</p>
        </Card>
        </Skeleton>
    )
  }
}