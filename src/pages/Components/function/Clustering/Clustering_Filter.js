import React, { Component } from 'react';
import { TreeSelect, Button } from 'antd';

const { TreeNode } = TreeSelect;

export default class Clustering_Filter extends React.Component {

    render() {
        const { columnChange, onChange, value } = this.props;
        return (
            <div>
                    <TreeSelect
                        showSearch
                        style={{ width: 400 }}
                        value={value}
                        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                        placeholder="Please select"
                        allowClear
                        multiple
                        onChange={onChange}
                    >
                        <TreeNode value="Fee" title="Fee" key="1" selectable={false}>
                            <TreeNode value="fee_average" title="average" key="fee_average" />
                            <TreeNode value="fee_maximum" title="maximum" key="fee_maximum" />
                            <TreeNode value="fee_minimum" title="minimum" key="fee_minimum" />
                            <TreeNode value="fee_standard deviation" title="standard deviation" key="fee_standard deviation" />
                            <TreeNode value="fee_sumation" title="sumation" key="fee_sumation" />
                            <TreeNode value="fee_variance" title="variance" key="fee_variance" />
                        </TreeNode>
                        <TreeNode value="TxVsize" title="TxVsize" key="2" selectable={false}>
                            <TreeNode value="txVsize_average" title="average" key="txVsize_average" />
                            <TreeNode value="txVsize_maximum" title="maximum" key="txVsize_maximum" />
                            <TreeNode value="txVsize_minimum" title="minimum" key="txVsize_minimum" />
                            <TreeNode value="txVsize_standard deviation" title="standard deviation" key="txVsize_standard deviation" />
                            <TreeNode value="txVsize_sumation" title="sumation" key="txVsize_sumation" />
                            <TreeNode value="txVsize_variance" title="variance" key="txVsize_variance" />
                        </TreeNode>
                        <TreeNode value="NVout" title="NVout" key="3" selectable={false}>
                            <TreeNode value="nVout_average" title="average" key="nVout_average" />
                            <TreeNode value="nVout_maximum" title="maximum" key="nVout_maximum" />
                            <TreeNode value="nVout_minimum" title="minimum" key="nVout_minimum" />
                            <TreeNode value="nVout_standard deviation" title="standard deviation" key="nVout_standard deviation" />
                            <TreeNode value="nVout_sumation" title="sumation" key="nVout_sumation" />
                            <TreeNode value="nVout_variance" title="variance" key="nVout_variance" />
                        </TreeNode>
                        <TreeNode value="TxWeight" title="TxWeight" key="4" selectable={false}>
                            <TreeNode value="txWeight_average" title="average" key="txWeight_average" />
                            <TreeNode value="txWeight_maximum" title="maximum" key="txWeight_maximum" />
                            <TreeNode value="txWeight_minimum" title="minimum" key="txWeight_minimum" />
                            <TreeNode value="txWeight_standard deviation" title="standard deviation" key="txWeight_standard deviation" />
                            <TreeNode value="txWeight_sumation" title="sumation" key="txWeight_sumation" />
                            <TreeNode value="txWeight_variance" title="variance" key="txWeight_variance" />
                        </TreeNode>
                        <TreeNode value="TxSize" title="TxSize" key="5" selectable={false}>
                            <TreeNode value="txSize_average" title="average" key="txSize_average" />
                            <TreeNode value="txSize_maximum" title="maximum" key="txSize_maximum" />
                            <TreeNode value="txSize_minimum" title="minimum" key="txSize_minimum" />
                            <TreeNode value="txSize_standard deviation" title="standard deviation" key="txSize_standard deviation" />
                            <TreeNode value="txSize_sumation" title="sumation" key="txSize_sumation" />
                            <TreeNode value="txSize_variance" title="variance" key="txSize_variance" />
                        </TreeNode>
                        <TreeNode value="NVin" title="NVin" key="6" selectable={false}>
                            <TreeNode value="nVin_average" title="average" key="nVin_average" />
                            <TreeNode value="nVin_maximum" title="maximum" key="nVin_maximum" />
                            <TreeNode value="nVin_minimum" title="minimum" key="nVin_minimum" />
                            <TreeNode value="nVin_standard deviation" title="standard deviation" key="nVin_standard deviation" />
                            <TreeNode value="nVin_sumation" title="sumation" key="nVin_sumation" />
                            <TreeNode value="nVin_variance" title="variance" key="nVin_variance" />
                        </TreeNode>
                    </TreeSelect >
                <Button onClick={() => columnChange(value)} type="primary">Confirm</Button>
            </div>
        );
    }
}