import React, { Component } from 'react';
import { Table } from 'antd';
import axios from 'axios';
import columns from './Detection_model_data';

export default class Detection_model extends Component {
  state = {
    data: [],
    title: "",
    loading: true,
  }

  async componentDidMount() {
    await axios.get(`http://163.152.223.12:3030/analysis/?collection=ANALYSIS_best_model`)
      .then(res => {
        let data_result = [];
        let data_tmp = {
          nLayer: 0,
          nDrop: 0,
          nEpoch: 0,
          tr_loss: 0,
          tr_accuracy: 0,
          te_loss: 0,
          te_accuracy: 0,
        }
        res.data[0].models.map(v => {
          let tmp = v._id.split('_');
          let sli_1 = tmp[1].slice(tmp[1].length-2,tmp[1].length);
          let sli_2 = tmp[2].slice(tmp[2].length-1,tmp[2].length);
          let sli_3 = tmp[3].slice(tmp[3].length-7,tmp[3].length);
          data_tmp = {
            nLayer: sli_1,
            nDrop: (sli_2 * 10) + '%',
            nEpoch: sli_3,
            tr_loss: (v.evaluation.train.loss).toFixed(4),
            tr_accuracy: (v.evaluation.train.accuracy * 100).toFixed(2) + '%',
            te_loss: (v.evaluation.test.loss).toFixed(4),
            te_accuracy: (v.evaluation.test.accuracy * 100).toFixed(2) + '%',
          }
          data_result.push(data_tmp);
        })
        this.setState({
          title: res.data[0]._id,
          data: data_result,
        })
      })
      .then(() => {
        this.setState({
          loading: false,
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    const { loading, title, data } = this.state;
    return (
      <Table title={() => <h1>{title}</h1>} 
      loading={loading} 
      columns={columns} 
      dataSource={data} 
      size="small"
      bordered 
      />
    )
  }
}