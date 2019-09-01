import React from 'react';
import axios from 'axios';
import renameKeys from 'rename-keys';
import { Card } from 'antd';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

var today = new Date();

function findMin(data) {
  let min = data[0].value;
  for (let i = 1; i < data.length; i++) {
    if (data[i].value < min)
      min = data[i].value;
  }
  return min;
}
function findMax(data) {
  let max = data[0].value;
  for (let i = 1; i < data.length; i++) {
    if (data[i].value > max)
      max = data[i].value;
  }
  return max;
}

export default class GetChartData extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      min: 0,
      max: 0,
      open: false,
      date_start: `${today.getFullYear() - 1}-${today.getMonth() + 1 < 10 ? '0' + (today.getMonth() + 1) : today.getMonth() + 1}-${today.getDate()}`,
      date_end: `${today.getFullYear()}-${today.getMonth() + 1 < 10 ? '0' + (today.getMonth() + 1) : today.getMonth() + 1}-${today.getDate() - 1}`,
    }
  }

  CloseModal = () => {
    this.setState({ open: false });
  };

  onclick = () => {
    this.setState({
      open: true,
    })
  }

  async componentWillMount() {
    await axios.get(`http://163.152.223.12:3030/date/?collection=${this.props.col_api}&start=${this.state.date_start}&end=${this.state.date_end}`)
      .then(res => {
        console.log(this.props.col_api,res);
        let temp = res.data.map(t => {
          let re_keys = renameKeys(t, function (key, val) {
            return typeof(val) === typeof("stringValue") ? key = 'id' : key = 'value';
          })
          return re_keys;
        })

        this.setState({
          data:temp,
          min:findMin(temp),
          max:findMax(temp),
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    const title = this.props.col_api.substr(6, this.props.col_api.length - 6);
    const {min, max} = this.state;
    return (
      <React.Fragment>
        <Card title={title} style={{ height: 300 }}>
          <LineChart width={480} height={200} data={this.state.data}>
            <Line type="basis" dataKey='value' stroke="#8884d8" strokeWidth={1} dot={false}/>
            <YAxis type="number" domain={[min,max]} hide={true}/>
          </LineChart>
        </Card>
      </React.Fragment>
    );
  }
}