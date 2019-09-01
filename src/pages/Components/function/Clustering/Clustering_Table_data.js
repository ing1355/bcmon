const columns = [
    {
        title: 'Cluster Number',
        dataIndex: 'num',
        align: 'center',
        width: '60px',
    },
    {
        title: 'Fee',
        dataIndex: 'fee_sum',
        children: [
            {
                title: 'average',
                dataIndex: 'fee_average',
                align: 'center',
                width: '10px',
            },
        ],
        align: 'center',
        width: '60px',
    },
    {
        title: 'TxVsize',
        dataIndex: 'txVsize_sum',
        children: [
            {
                title: 'average',
                dataIndex: 'txVsize_average',
                align: 'center',
                width: '10px',
            },
        ],
        align: 'center',
        width: '60px',
    },
    {
        title: 'NVout',
        dataIndex: 'nVout_sum',
        children: [
            {
                title: 'average',
                dataIndex: 'nVout_average',
                align: 'center',
                width: '10px',
            },
        ],
        align: 'center',
        width: '1%',
    },
    {
        title: 'TxWeight',
        dataIndex: 'txWeight_sum',
        children: [
            {
                title: 'average',
                dataIndex: 'txWeight_average',
                align: 'center',
                width: '10px',
            },
        ],
        align: 'center',
        width: '60px',
    },
    {
        title: 'TxSize',
        dataIndex: 'txSize_sum',
        children: [
            {
                title: 'average',
                dataIndex: 'txSize_average',
                align: 'center',
                width: '10px',
            },
        ],
        align: 'center',
        width: '60px',
    },
    {
        title: 'NVin',
        dataIndex: 'nVin_sum',
        children: [
            {
                title: 'average',
                dataIndex: 'nVin_average',
                align: 'center',
                width: '10px',
            },
        ],
        align: 'center',
        width: '60px',
    },
];

export { columns };