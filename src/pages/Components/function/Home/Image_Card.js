import React, { Component } from 'react';
import { Card, Empty, Row, Col } from 'antd';

export default class Image_Card extends Component {
    render() {
        return (
            <div>
                <Col span={8}>
                    <Empty
                        image={this.props.img_src}
                        imageStyle={{
                            height: 200,
                            margin: 'auto',                            
                        }}
                        description={
                            <span></span>
                        }

                    />
                </Col>
                <Col span={8}>
                    <Card style={{margin: 'auto', width:1000, height:200,}}>
                        <h1>NetWork Subscription</h1>
                        <p>Need Input Data</p>
                    </Card>
                </Col>
            </div>
        )
    }
}