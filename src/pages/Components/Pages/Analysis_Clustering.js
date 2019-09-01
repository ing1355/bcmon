import React, { Component, Suspense } from 'react';
import { Row, Col, Card, message, DatePicker, Spin } from 'antd';
import { columns } from '../function/Clustering/Clustering_Table_data';
import axios from 'axios';
import renameKeys from 'rename-keys';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import moment from 'moment';

const dateFormat = 'YYYY/MM/DD';

const Clustering_Table1 = React.lazy(() => import('../function/Clustering/Clustering_Table1'));
const Clustering_Table2 = React.lazy(() => import('../function/Clustering/Clustering_Table2'));
const Clustering_Table3 = React.lazy(() => import('../function/Clustering/Clustering_Table3'));
const Clustering_Chart = React.lazy(() => import('../function/Clustering/Clustering_Chart'));


class Analysis_Gon extends Component {
  constructor() {
    super();
    this.state = {
      chart_data: [],
      chart_loading: true,
      table_data: [],
      table_loading: true,
      table_data_2: [],
      table_loading_2: true,
      table_data_3: [],
      table_loading_3: true,
      column: columns,
      column_2: undefined,
      column_3: undefined,
      filter_value: undefined,
      title: '',
      current_date: '',
      date_loading: true,
    }

    axios.get(`http://163.152.223.12:3030/analysis/clustering/model?time=${this.current_date}`)
      .then(res => {
        let tmp_keys = Object.keys(res.data[0]['clusterinfo']);
        let tmp_vals = Object.values(res.data[0]['clusterinfo']);
        let chart_result = [];
        let table_result = {};
        let table_col = [];
        let sum = 0;

        tmp_keys.map(k => {
          chart_result.push({
            C_num: k,
            count: tmp_vals[k - 1],
          })
        })

        for (var ind in res.data[0]['clusterinfo']) {
          let t_key = 'C_' + ind;
          table_col.push({
            title: ind,
            dataIndex: t_key,
            align: 'center',
          })
          table_result[t_key] = tmp_vals[ind - 1];
          sum += tmp_vals[ind - 1];
        }

        for (var obj in table_result) {
          table_result[obj] = ((table_result[obj] / sum) * 100).toFixed(4) + '%';
        }

        this.setState({
          current_date: res.data[0].time,
          title: res.data[0]['_id'],
          chart_data: chart_result,
          chart_loading: false,
          table_data_2: table_result,
          column_2: table_col,
          table_loading_2: false,
          date_loading: false,
        })
      })
      .catch(err => {
        console.log(err);
        this.setState({
          chart_loading: true,
          table_loading_2: true,
        })
      })

    axios.get(`http://163.152.223.12:3030/analysis/clustering/predict?time=${this.current_date}`)
      .then(res => {
        let t_col = [];
        let data_result = [];
        Object.keys(res.data[0]).map(k => {
          t_col.push({
            title: k === '_id' ? 'id' : k,
            dataIndex: k === '_id' ? 'id' : k,
            key: k === '_id' ? 'id' : k,
            align: 'center',
          })
        }) // Define Table3 Column
        let val_temp = res.data.splice(res.data.length - 5, res.data.length);
        val_temp.map(val => {
          data_result.push({
            id: val['_id'],
            cluster: val['cluster'],
            time: val['time'],
          })
        })
        this.setState({
          table_data_3: data_result,
          column_3: t_col,
          table_loading_3: false,
        })
      })
      .catch(err => {
        console.log(err);
        this.setState({
          table_loading_3: true,
        })
      })

    axios.get(`http://163.152.223.12:3030/analysis/clustering/result?time=${this.current_date}`)
      .then(res => {
        let data = [];
        let temp_keys = Object.keys(res.data[0].analysis_result.cluster1);
        let sum = temp_keys.filter(key =>
          ((key.match(/sum/g) || []).length === 1) && ((key.match(/_/g) || []).length === 1)
        )
        for (var obj in res.data[0].analysis_result) {
          let tmp_data = {};
          sum.map(t => {
            let t_key = t.split('_')[0];
            let re_key = renameKeys(res.data[0].analysis_result[obj][t], function (key, val) {
              return key = t_key + '_' + key;
            })
            for (var d in re_key) {
              re_key[d] = re_key[d].toFixed(1);
              tmp_data[d] = re_key[d];
            }
          })
          tmp_data['num'] = obj.slice(7)
          data.push(tmp_data);
        }
        this.setState({
          table_data: data,
          table_loading: false,
        })
      })
      .catch(err => {
        console.log(err);
        this.setState({
          table_loading: true,
        })
      })
  }



  columnChange = () => {
    let col = this.state.column.slice();
    let val = this.state.filter_value;
    let fil_ind = {
      'fee': 1,
      'txVsize': 2,
      'nVout': 3,
      'txWeight': 4,
      'txSize': 5,
      'nVin': 6,
    }

    if (val === undefined) {
      message.error('Please Select Filter');
    }
    else {
      val.map(res => {
        let child = col[fil_ind[res.split('_')[0]]]['children'];
        if (child.find(x => x.dataIndex === res) === undefined) {
          child.push({
            title: res.split('_')[1],
            dataIndex: res,
            align: 'center',
            width: '10px',
          })
        }
        else {
          child.splice(child.findIndex(x => x.dataIndex === res), 1);
        }
      })
    }
    this.setState({
      column: col,
      filter_value: undefined,
    })
  }

  dateChange = (date, dateString) => {
    axios.get(`http://163.152.223.12:3030/analysis/clustering/model?time=${dateString}`)
      .then(res => {
        let tmp_keys = Object.keys(res.data[0]['clusterinfo']);
        let tmp_vals = Object.values(res.data[0]['clusterinfo']);
        let chart_result = [];
        let table_result = {};
        let table_col = [];
        let sum = 0;
        tmp_keys.map(k => {
          chart_result.push({
            C_num: k,
            count: tmp_vals[k - 1],
          })
        })

        for (var ind in res.data[0]['clusterinfo']) {
          let t_key = 'C_' + ind;
          table_col.push({
            title: ind,
            dataIndex: t_key,
            align: 'center',
          })
          table_result[t_key] = tmp_vals[ind - 1];
          sum += tmp_vals[ind - 1];
        }

        for (var obj in table_result) {
          table_result[obj] = ((table_result[obj] / sum) * 100).toFixed(4) + '%';
        }
        this.setState({
          current_date: res.data[0].time,
          title: res.data[0]['_id'],
          chart_data: chart_result,
          chart_loading: false,
          table_data_2: table_result,
          column_2: table_col,
          table_loading_2: false,
          date_loading: false,
        })
      })
      .catch(err => {
        console.log(err);
        message.error(`Can't Find Response Data`, 5)
        this.setState({
          table_loading_2: true,
          chart_loading: true,
        })
      })

    axios.get(`http://163.152.223.12:3030/analysis/clustering/predict?time=${dateString}`)
      .then(res => {
        let t_col = [];
        let data_result = [];
        Object.keys(res.data[0]).map(k => {
          t_col.push({
            title: k === '_id' ? 'id' : k,
            dataIndex: k === '_id' ? 'id' : k,
            key: k === '_id' ? 'id' : k,
            align: 'center',
          })
        }) // Define Table3 Column
        let val_temp = res.data.splice(res.data.length - 5, res.data.length);
        val_temp.map(val => {
          data_result.push({
            id: val['_id'],
            cluster: val['cluster'],
            time: val['time'],
          })
        })
        this.setState({
          table_data_3: data_result,
          column_3: t_col,
          table_loading_3: false,
        })
      })
      .catch(err => {
        console.log(err);
        this.setState({
          table_loading_3: true,
        })
      })

    axios.get(`http://163.152.223.12:3030/analysis/clustering/result?time=${dateString}`)
      .then(res => {
        let data = [];
        let temp_keys = Object.keys(res.data[0].analysis_result.cluster1);
        let sum = temp_keys.filter(key =>
          ((key.match(/sum/g) || []).length === 1) && ((key.match(/_/g) || []).length === 1)
        )
        for (var obj in res.data[0].analysis_result) {
          let tmp_data = {};
          sum.map(t => {
            let t_key = t.split('_')[0];
            let re_key = renameKeys(res.data[0].analysis_result[obj][t], function (key, val) {
              return key = t_key + '_' + key;
            })
            for (var d in re_key) {
              re_key[d] = re_key[d].toFixed(1);
              tmp_data[d] = re_key[d];
            }
          })
          tmp_data['num'] = obj.slice(7)
          data.push(tmp_data);
        }
        this.setState({
          table_data: data,
          table_loading: false,
        })
      })
      .catch(err => {
        console.log(err);
        this.setState({
          table_loading: true,
        })
      })
    this.setState({
      current_date: dateString,
    })
  }

  onChange = value => {
    this.setState({
      filter_value: value,
    })
  };

  render() {
    const { table_data, table_loading, column, filter_value, column_2,
      chart_loading, chart_data, table_data_2, table_loading_2, title
      , table_data_3, table_loading_3, column_3, current_date, date_loading } = this.state;
    return (
      <GridContent>
        <Suspense fallback={null}>
          <Row>
            <Col>
              <Card style={{ height: 350, marginBottom: '24px' }}>
                <h3 style={{textAlign:'center'}}>kmeans를 이용한 Clustering 결과 페이지입니다.</h3>
                <p>날짜를 선택하여 각 Clutser에 대한 Data를 출력합니다.</p>
                <p>Data는 날짜별로 Clustering 한 결과이며, 각 날짜별로 Cluster 개수도 다릅니다.</p>
                <p>클러스터 별 Instace 개수, 예측 Data, Feature 통계로 나누어지며</p>
                <p>아래 차트에는 각 Cluster의 Instance Count를 나타내고</p>
                <p>각 테이블 별로 다음 Cluster 예측, 해당 날짜 Cluster Count 비율, Cluster Feature 통계로 나누어지며</p>
                <p>다시 각 Feature는 세부 항목으로 나누어집니다.</p>
                <p>Feature : Average, Maximum, Minimum, Standard Deviation, Sumation, Variance</p>
                <p>Feature는 위와 같이 총 6가지로 나누어지며 아래 Filter를 통해 확인할 수 있습니다.</p>
              </Card>
            </Col>
          </Row>
          <Card bordered={false} title={<h3>{title}</h3>}>
            <div>
              <Row gutter={24}>
                <Col span='auto' style={{ marginBottom: '8px' }}>
                  {date_loading
                    ? <Spin size='large' />
                    : <DatePicker onChange={this.dateChange} defaultValue={moment(current_date, dateFormat)} />}
                </Col>
                <Col span={8}>
                  <Clustering_Chart loading={chart_loading} data={chart_data} />
                </Col>
                <Col span={13}>
                  <Clustering_Table1 loading={table_loading_3} data={table_data_3} columns={column_3} />
                </Col>
              </Row>
              <Row style={{height:200}}>
                <Clustering_Table2 loading={table_loading_2} data={table_data_2} columns={column_2} />
              </Row>
              <Row gutter={24}>
                <Col span={22} offset={1}>
                  <Clustering_Table3 loading={table_loading} data={table_data}
                    columns={column} columnChange={this.columnChange}
                    onChange={this.onChange} value={filter_value} />
                </Col>
              </Row>
            </div>
          </Card>
        </Suspense>
      </GridContent>
    );
  }
}

export default Analysis_Gon;
