import React, { Component } from 'react';
import { Spin } from 'antd';
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, Legend,
} from 'recharts';

export default class Clustering_Chart extends Component {
    render() {
        const { loading, data } = this.props;
        return (
            <div>
                {loading
                    ? <Spin size='large' />
                    :
                    <div>
                        <h3 style={{ textAlign: 'center' }}>클러스터 별 instance 개수</h3>
                        <BarChart
                            width={500}
                            height={450}
                            data={data}
                            margin={{
                                top: 10, right: 10, bottom: 5,
                            }}
                        >
                            <XAxis dataKey="C_num" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="count" fill="#8884d8" />
                        </BarChart>
                    </div>
                }
            </div>
        )
    }
}