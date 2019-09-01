import React, { Component } from 'react';
import { Row, Col } from 'antd';
import MakeCard from '../function/Home/MakeCard';
import Image_Card from '../function/Home/Image_Card';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Row>
                    Home Page
                </Row>
                <Row align='middle' gutter={48} type='flex' justify="center">
                    <Col span={6}>
                        <MakeCard match_key={'difficulty'} />
                    </Col>
                    <Col span={6}>
                        <MakeCard match_key={'height'} />
                    </Col>
                    <Col span={6}>
                        <MakeCard match_key={''} />
                    </Col>
                    <Col span={6}>
                        <MakeCard match_key={''} />
                    </Col>
                </Row>
                <Row align='middle' gutter={48} type="flex" justify="center">
                    <Col span={6}>
                        <MakeCard match_key={''} />
                    </Col>
                    <Col span={6}>
                        <MakeCard match_key={''} />
                    </Col>
                    <Col span={6}>
                        <MakeCard match_key={''} />
                    </Col>
                    <Col span={6}>
                        <MakeCard match_key={''} />
                    </Col>
                </Row>
                <Row>
                    <Col span={24} style={{ height: 100 }}>
                        Analysis Part
                    </Col>
                </Row>
                <Row type="flex" style={{ background: '#ECECEC', height: 250, marginBottom: 30, }}>
                    <Image_Card img_src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                </Row>
                <Row type="flex" style={{ background: '#ECECEC', height: 250, }}>
                    <Image_Card img_src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                </Row>
            </div>
        )
    }
}