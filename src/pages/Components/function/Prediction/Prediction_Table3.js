import React, { Component } from 'react';
import { Table } from 'antd';

const { Column } = Table;

export default class Prediction_Table3 extends Component {
    onChange(pagination, filters, sorter) {
        console.log('params', pagination, filters, sorter);
    }

    render() {
        const { loading, data } = this.props;
        return (
            <Table title={() => <h4 style={{textAlign: "center"}}>최근 예측 내역</h4>}
                loading={loading}
                dataSource={data}
                onChange={this.onChange}
                size="small"
                bordered
            >
                <Column title={"Lastest 5 Block's Height"} dataIndex={'_id'} key={'_id'} />
                <Column title={"Number Of Tx"} dataIndex={'nTx'} key={'nTx'}/>
                <Column title={"Real Diraction"} dataIndex={'Direction'} key={'Direction'}/> 
                <Column title={"Predicted Diraction"} dataIndex={'Prediction'} key={'Prediction'}/>
            </Table>
        )
    }
}