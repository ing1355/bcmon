import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Brush
} from 'recharts';

export default class Detection_Chart extends PureComponent {

  render() {
    const { Chart_Data, Chart_index } = this.props;
    return (
        <AreaChart
          data={Chart_Data}
          width={1000}
          height={300}
        >
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="id" />
          <YAxis domain={[0, 8]} />
          <Tooltip />

          <Area type="monotone" dataKey={Chart_index[1]} stackId="1" stroke="#84d8a7" fill="#84d8a7" />
          <Area type="monotone" dataKey={Chart_index[2]} stackId="1" stroke="#84cdd8" fill="#84cdd8" />
          <Area type="monotone" dataKey={Chart_index[3]} stackId="1" stroke="#848fd8" fill="#848fd8" />
          <Area type="monotone" dataKey={Chart_index[4]} stackId="1" stroke="#ab84d8" fill="#ab84d8" />
          <Area type="monotone" dataKey={Chart_index[5]} stackId="1" stroke="#d884cb" fill="#d884cb" />
          <Area type="monotone" dataKey={Chart_index[6]} stackId="1" stroke="#d88484" fill="#d88484" />
          <Brush
            dataKey="id"
            height={20}
            stroke="#000000"
            startIndex={0}
            endIndex={100}
          >
            <AreaChart >
              <Area type="monotone" dataKey={Chart_index[1]} stackId="1" stroke="#84d8a7" fill="#84d8a7" />
              <Area type="monotone" dataKey={Chart_index[2]} stackId="1" stroke="#84cdd8" fill="#84cdd8" />
              <Area type="monotone" dataKey={Chart_index[3]} stackId="1" stroke="#848fd8" fill="#848fd8" />
              <Area type="monotone" dataKey={Chart_index[4]} stackId="1" stroke="#ab84d8" fill="#ab84d8" />
              <Area type="monotone" dataKey={Chart_index[5]} stackId="1" stroke="#d884cb" fill="#d884cb" />
              <Area type="monotone" dataKey={Chart_index[6]} stackId="1" stroke="#d88484" fill="#d88484" />
            </AreaChart>
          </Brush>
        </AreaChart>
    )
  }
}
