import React, { Component } from 'react';
import { Table } from 'antd';

const { Column } = Table;

export default class Prediction_Table1 extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        data: [],
        loading: true,
    }

    onChange(pagination, filters, sorter) {
        console.log('params', pagination, filters, sorter);
    }

    componentDidUpdate() {
        console.log('props1',this.props);
    }

    render() {
        const { loading, data } = this.state;
        console.log(data);
        return (
            <Table title={() => <h4 style={{textAlign: "center"}}>생성 할 블록의 높이 / 증감예상</h4>}
                loading={loading}
                dataSource={data}
                onChange={this.onChange}
                size="small"
                bordered
            >
                <Column title={"Prediction Count"} />
                <Column title={"TRUE"} />
                <Column title={"FALSE"} />
                <Column title={"ACC"} />
                
            </Table>
        )
    }
}