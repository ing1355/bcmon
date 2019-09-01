import React, { Component } from 'react';
import { Table } from 'antd';

const { Column } = Table;

export default class Detection_Table2 extends Component {

    render() {
        const {data, loading} = this.props;
        return (
            <Table
                size="small"
                loading={loading}
                bordered
                dataSource={data}
            >
                <Column title={"Height"} dataIndex={'Height'} key={'Height'} align={'center'}/>
                <Column title={"Date"} dataIndex={'Date'} key={'Date'} align={'center'}/>
            </Table>
        )
    }
}