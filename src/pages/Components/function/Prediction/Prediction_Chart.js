import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { Spin } from 'antd';

export default class Prediction_Chart extends PureComponent {
  render() {
    const { data, loading } = this.props;
    return (
      <div>
        {loading
          ? <Spin size='large' />
          :
          <LineChart
            width={650}
            height={400}
            data={data}
            margin={{
              top: 5, right: 20, left: 0, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="_id" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="nTx" stroke="#82ca9d" dot={false}/>
          </LineChart>
        }
      </div>
    );
  }
}
