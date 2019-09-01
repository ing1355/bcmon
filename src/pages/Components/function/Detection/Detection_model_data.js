const columns = [
    {
      title: 'Id',
      children: [
        {
          title: 'Layer',
          dataIndex: 'nLayer',
          key: 'nLayer',
          align: 'center',
        },
        {
          title: 'Drop',
          dataIndex: 'nDrop',
          key: 'nDrop',
          align: 'center',
        },
        {
          title: 'Epoch',
          dataIndex: 'nEpoch',
          key: 'nEpoch',
          align: 'center',
        },
      ],
    },
    {
      title: 'Train',
      children: [
        {
          title: 'Loss',
          dataIndex: 'tr_loss',
          key: 'tr_loss',
          align: 'center',
        },
        {
          title: 'Accuracy',
          dataIndex: 'tr_accuracy',
          key: 'tr_accuracy',
          align: 'center',
        },
      ]
    },
    {
      title: 'Test',
      children: [
        {
          title: 'Loss',
          dataIndex: 'te_loss',
          key: 'te_loss',
          align: 'center',
        },
        {
          title: 'Accuracy',
          dataIndex: 'te_accuracy',
          key: 'te_accuracy',
          align: 'center',
        },
      ]
    },
  ];

  export default columns;