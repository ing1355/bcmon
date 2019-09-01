import React, { Component, Suspense } from 'react';
import { Row, Col, Card, Tabs } from 'antd';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import axios from 'axios';
import renameKeys from 'rename-keys';

const Detection_Chart = React.lazy(() => import('../function/Detection/Detection_Chart'));
const Detection_Chart2 = React.lazy(() => import('../function/Detection/Detection_Chart2'));
const Detection_Table = React.lazy(() => import('../function/Detection/Detection_Table2'));
const DrawTable = React.lazy(() => import('../function/Detection/Detection_model'));

function timeConverter(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = year + '-' + month + '-' + date + ' ' + hour + ':' + min + ':' + sec;
  return time;
}

export default class Analysis_Baek extends Component {
  state = {
    Chart_Data: [],
    Chart_index: [],
    Chart_Data_2: [],
    Chart_index_2: [],
    Table_data: [],
    Table_loading: true,
    loading: false,
  }

  async componentDidMount() {
    await axios.get(`http://163.152.223.12:3030/analysis/limit/?collection=ANALYSIS_ddos_detection`)
      .then(res => {
        let chart_data = [];
        res.data.map(v => {
          let result = {};
          result['id'] = v._id;
          v.prediction.map(t => {
            let tmp = t._id.split('_');
            let name = tmp[1].slice(1, 2) + tmp[1].slice(tmp[1].length - 2, tmp[1].length)
              + tmp[2].slice(1, 2) + tmp[2].slice(tmp[2].length - 1, tmp[2].length)
              + tmp[3].slice(1, 2) + tmp[3].slice(tmp[3].length - 7, tmp[3].length);
            result[name] = t.score;
          })
          chart_data.unshift(result);
        })
        this.setState({
          Chart_Data: chart_data,
          Chart_index: Object.keys(chart_data[0]),
        })
      })
      .catch(err => {
        console.log(err);
      })

    await axios.get(`http://163.152.223.12:3030/analysis/ddos_2`)
      .then(res => {
        let chart_data = [];
        res.data.map(v => {
          let result = {};
          result['id'] = v._id;
          v.prediction.map(t => {
            let tmp = t._id.split('_');
            let name = tmp[1].slice(1, 2) + tmp[1].slice(tmp[1].length - 2, tmp[1].length)
              + tmp[2].slice(1, 2) + tmp[2].slice(tmp[2].length - 1, tmp[2].length)
              + tmp[3].slice(1, 2) + tmp[3].slice(tmp[3].length - 7, tmp[3].length);
            result[name] = t.score;
          })
          chart_data.unshift(result);
        })
        this.setState({
          Chart_Data_2: chart_data,
        })
      })
      .catch(err => {
        console.log(err);
      })

    await axios.get(`http://163.152.223.12:3030/analysis/current_block/?collection=block_transaction`)
      .then(res => {
        let result = [];
        res.data.map(v => {
          let temp = renameKeys(v, function (key, val) {
            return key === '_id' ? 'Height' : 'Date';
          })
          temp['Date'] = timeConverter(temp['Date']);
          result.push(temp);
        })
        console.log(result);

        this.setState({
          Table_data: result,
          Table_loading: false,
        })
      })

  }

  render() {
    const { Chart_Data, Chart_index, Table_data, Table_loading,
      Chart_Data_2 } = this.state;
    return (
      <GridContent>
        <Suspense fallback={null}>
          <Row gutter={24} align={'middle'} type='flex'>
            <Col span={10}>
              <Card
                style={{ width: '100%', height: 450, marginBottom: '32px' }}
                title={'Description'}
              >
                <img style={{ width: 300, height: 300, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', position: 'absolute' }} alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
              </Card>
            </Col>
            <Col span={14}>
              <Card bodyStyle={{ padding: '10px 12px 4px 12px' }} style={{ width: '100%', height: '100%', marginBottom: '32px' }}>
                  <DrawTable />
              </Card>
            </Col>
          </Row>
          <Row gutter={24} align={'middle'} type='flex'>
            <Card style={{ width: '98.5%', marginLeft: '12px', marginBottom: '32px' }}>
              <Col xl={16} lg={16} md={16} sm={16} xs={16} >
                <Detection_Chart Chart_Data={Chart_Data} Chart_index={Chart_index} />
              </Col>
              <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                <Detection_Table data={Table_data} loading={Table_loading} />
              </Col>
            </Card>
          </Row>
          <Row gutter={24} align={'middle'} type='flex'>
            <Card style={{ width: '98.5%', marginLeft: '12px' }}>
              <Col xl={16} lg={16} md={16} sm={16} xs={16} >
                <Detection_Chart2 Chart_Data={Chart_Data_2} Chart_index={Chart_index} />
              </Col>
            </Card>
          </Row>

        </Suspense>
      </GridContent>
    )
  }
}