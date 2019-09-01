import React, { Component } from 'react';
import { Table, Button } from 'antd';
import Prediction_Filter from './Clustering_Filter';


export default class Clustering_Table extends Component {

    render() {
        const { loading, data, columns, columnChange, onChange, value } = this.props;
        
        return (
            <div>
                <Prediction_Filter columnChange={columnChange} onChange={onChange} value={value}/>
                <Table
                    title={() => <h3 style={{textAlign: 'center'}}>클러스터 별 주요 feature 통계</h3>}
                    loading={loading}
                    dataSource={data}
                    columns={columns}
                    size="small"
                    bordered
                    scroll= {{x : 1000}}
                >
                </Table>
            </div>
        )
    }
}