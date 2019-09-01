import React from 'react';
import GetChartData from '../function/Chart/GetChartData';
import { Row, Col } from 'antd';

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 8,
  style: { marginBottom: 12 },
};


export default class Chart extends React.Component {
  render() {
    return (
      <div>
        <Row gutter={12}>
          <Col {...topColResponsiveProps}>
            <GetChartData col_api={"GRAPH_accumulated_nTx_per_day"} />
          </Col>
          <Col {...topColResponsiveProps}>
            <GetChartData col_api={"GRAPH_accumulated_nUtxo_per_day"} />
          </Col>
          <Col {...topColResponsiveProps}>
            <GetChartData col_api={"GRAPH_accumulated_size_per_day"} />
          </Col>
        </Row>
        <Row gutter={12}>
          <Col {...topColResponsiveProps}>
            <GetChartData col_api={"GRAPH_average_block_size_per_day"} />
          </Col>
          <Col {...topColResponsiveProps}>
            <GetChartData col_api={"GRAPH_average_difficulty_per_day"} />
          </Col>
          <Col {...topColResponsiveProps}>
            <GetChartData col_api={"GRAPH_average_median_confirmation_time_per_day"} />
          </Col>
        </Row>
        <Row gutter={12}>
          <Col {...topColResponsiveProps}>
            <GetChartData col_api={"GRAPH_average_number_of_transaction_per_day"} />
          </Col>
          <Col {...topColResponsiveProps}>
            <GetChartData col_api={"GRAPH_cost_of_transaction_volume_per_day"} />
          </Col>
          <Col {...topColResponsiveProps}>
            <GetChartData col_api={"GRAPH_cost_per_transaction_per_day"} />
          </Col>
        </Row>
        <Row gutter={12}>
          <Col {...topColResponsiveProps}>
            <GetChartData col_api={"GRAPH_summation_block_size_per_day"} />
          </Col>
          <Col {...topColResponsiveProps}>
            <GetChartData col_api={"GRAPH_summation_fee_per_day"} />
          </Col>
          <Col {...topColResponsiveProps}>
            <GetChartData col_api={"GRAPH_summation_mining_revenue_per_day"} />
          </Col>
        </Row>
        <Row gutter={12}>
          <Col {...topColResponsiveProps}>
            <GetChartData col_api={"GRAPH_summation_number_of_transaction_per_day"} />
          </Col>
          <Col {...topColResponsiveProps}>
            <GetChartData col_api={"GRAPH_summation_number_of_unique_address_per_day"} />
          </Col>
          <Col {...topColResponsiveProps}>
            <GetChartData col_api={"GRAPH_summation_number_of_utxo_per_day"} />
          </Col>
        </Row>
        <Row gutter={12}>
          <Col {...topColResponsiveProps}>
            <GetChartData col_api={"GRAPH_summation_transaction_output"} />
          </Col>
          <Col {...topColResponsiveProps}>
            <GetChartData col_api={"GRAPH_summation_whole_revenue_per_day"} />
          </Col>
        </Row>
      </div>
    )
  }
}