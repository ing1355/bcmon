import React, { Component } from 'react';
import { Table } from 'antd';

export default class Clustering_Table2 extends Component {
    render() {
        const { loading, data, columns } = this.props;
        return (
            <Table 
                title={() => <h3 style={{textAlign: 'center'}}>클러스터 별 instance 비율</h3>}
                loading={loading}
                dataSource={[data]}
                columns={columns}
                pagination={false}
                size="small"
                bordered
                scroll={{x: 1500}}
            >
            </Table>
        )
    }
}