import React, { Component } from 'react';
import { Table } from 'antd';

const { Column, ColumnGroup } = Table;

export default class Prediction_Table2 extends Component {
    onChange(pagination, filters, sorter) {
        console.log('params', pagination, filters, sorter);
    }

    render() {
        const { loading, data } = this.props;
        return (
            <Table title={() => <h4 style={{textAlign: "center"}}>생성 할 블록의 높이 / 증감예상</h4>}
                loading={loading}
                dataSource={[data]}
                onChange={this.onChange}
                size="small"
                bordered
            >
                <Column title={"Expected Block's Height"} dataIndex={'_id'} key={'_id'} />
                <Column title={"Diraction"} dataIndex={'Prediction'} key={'Prediction'} />
            </Table>
        )
    }
}