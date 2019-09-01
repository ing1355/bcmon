import React, { Component } from 'react';
import { Table } from 'antd';

export default class Clustering_Table3 extends Component {
    render() {
        const { loading, data, columns } = this.props;
        return (
            <Table 
                title={() => <h3 style={{textAlign: 'center'}}>이전 날짜에 생성된 모델 기반 실시간 블록 클러스터 예측</h3>}
                loading={loading}
                dataSource={data}
                columns={columns}
                size="small"
                bordered
                scroll
                style={{marginTop: '64px'}}
            >
            </Table>
        )
    }
}