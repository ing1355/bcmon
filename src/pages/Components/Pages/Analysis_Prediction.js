import React, { Component, Suspense } from 'react';

import GridContent from '@/components/PageHeaderWrapper/GridContent';
import axios from 'axios';
import { Card, Row, Col } from 'antd';

const Prediction_Chart = React.lazy(() => import('../function/Prediction/Prediction_Chart'));
const Prediction_Table1 = React.lazy(() => import('../function/Prediction/Prediction_Table1'));
const Prediction_Table2 = React.lazy(() => import('../function/Prediction/Prediction_Table2'));
const Prediction_Table3 = React.lazy(() => import('../function/Prediction/Prediction_Table3'));

class Analysis_Gon extends Component {
    state = {
        table_data_1: [],
        table_loading_1: true,
        table_data_2: [],
        table_loading_2: true,
        table_data_3: [],
        table_loading_3: true,
        chart_data: [],
        chart_loading: true,
    }

    async componentDidMount() {
        let chart_data = [];
        let table_data_2 = [];
        let table_loading_2 = true;
        let table_data_3 = [];
        let table_loading_3 = true;
        let table_data_3_RD = [];
        await axios.get(`http://163.152.223.12:3030/analysis2/Predict_Chart`)
            .then(res => {
                chart_data = res.data;
            })
            .catch(err => {
                console.log(err);
            })
        await axios.get(`http://163.152.223.12:3030/analysis2/Predict_Value`)
            .then(res => {
                let temp_2 = res.data.reduce(function (pre, cur) {
                    return (pre._id ? pre._id : pre) > cur._id ? pre : cur;
                })
                table_data_2 = temp_2;
                table_data_3 = res.data.slice(1, 6);
                table_loading_2 = false;
            })
            .catch(err => {
                console.log(err);
            })
        await axios.get(`http://163.152.223.12:3030/analysis2/Real_Direction`)
            .then(res => {
                let data = [];
                res.data.map(obj => {
                    let temp = {
                        'Direction' : obj.Direction,
                    }
                    data.push(temp);
                })
                table_data_3_RD = data;
                table_loading_3 = false;
            })
            .catch(err => {
                console.log(err);
            })

        let count = 0;

        table_data_3.map(obj => {
            obj['Direction'] = table_data_3_RD[count++].Direction;
            obj['nTx'] = chart_data[chart_data.length-count].nTx;
        })
        this.setState({
            chart_data: chart_data,
            chart_loading: false,
            table_data_2: table_data_2,
            table_loading_2 : table_loading_2,
            table_data_3: table_data_3,
            table_loading_3 : table_loading_3,
        })
    }

    render() {
        const { table_data_1, table_data_2, table_data_3, chart_data, chart_loading,
                table_loading_2, table_loading_3 } = this.state;
        return (
            <GridContent>
                <Suspense fallback={null}>
                    <Row>
                        <Col>
                            <Card style={{ height: 350, marginBottom: '24px' }}>
                                <p>합성 곱 신경망 기반 블록 단위 비트코인 트랜잭션 수 증감 예측시스템
                                    학습 된 합성 곱 신경망 모델이 비트코인 블록이 생성될 때마다 다음번 생성 될 블록에 담긴 트랜젹션 수의 증가/유지/감소를 예측.
                                    트랜잭션 수를 정규화 하였으며, 정규화 된 값을 기준으로 예측합니다.</p>
                                <p>정규화 된 값은 다음과 같습니다.</p>
                                <p>실제 트랜잭션 수 범위 : 1 ~ 5482</p>
                                <p>정규화 된 트랜잭션 수 범위 : 0 ~ 255</p>
                                <p>정규화 된 값 1 당 실제 트랜잭션 수의 수치 : 약 21개</p>
                                <p>증가 : 다음번 생성 될 블록에 담긴 트랜잭션 수는 이전의 블록보다 약 344개 이상으로 증가</p>
                                <p>유지 : 다음번 생성 될 블록에 담긴 트랜잭션 수는 이전의 블록보다 344개 이하로 증가 또는 감소</p>
                                <p>감소 : 다음번 생성 될 블록에 담긴 트랜잭션 수는 이전의 블록보다 약 344개 이상으로 감소</p>
                            </Card>
                        </Col>
                    </Row>
                    <Row gutter={24} style={{ marginBottom: '24px' }}>
                        <Col span={11}>
                            <Card style={{ height: 450, width: 760 }}>
                                <Prediction_Chart data={chart_data} loading={chart_loading} />
                            </Card>
                        </Col>
                        <Row gutter={24} type="flex" justify="center" align="top">
                            <Col span={23} offset={1} style={{ marginBottom: '10px' }}>
                                <Card style={{ height: 220 }}>
                                    <Prediction_Table1 data={table_data_1} loading={false} />
                                </Card>
                            </Col>
                            <Col span={23} offset={1}>
                                <Card
                                    style={{ height: 220 }}
                                >
                                    <Prediction_Table2 data={table_data_2} loading={table_loading_2} />
                                </Card>
                            </Col>
                        </Row>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Card style={{ height: 350 }}>
                                <Prediction_Table3 data={table_data_3} loading={table_loading_3} />
                            </Card>
                        </Col>
                    </Row>
                </Suspense>
            </GridContent>
        );
    }
}

export default Analysis_Gon;