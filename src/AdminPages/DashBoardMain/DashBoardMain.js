import React from 'react';
import './DashBoardMain.css'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const DashBoardMain = () => {

    // Chart Data -----------------------------------------------------
    const data = [
        {
          name: 'January',
          uv: 4000,
          $: 150,
          amt: 2400,
        },
        {
          name: 'February',
          uv: 3000,
          $: 500,
          amt: 2210,
        },
        {
          name: 'March',
          uv: 2000,
          $: 1000,
          amt: 2290,
        },
        {
          name: 'April',
          uv: 2780,
          $: 1208,
          amt: 2000,
        },
        {
          name: 'May',
          uv: 1890,
          $: 1500,
          amt: 2181,
        },
        {
          name: 'June',
          uv: 2390,
          $: 2500,
          amt: 2500,
        },
        {
          name: 'July',
          uv: 3490,
          $: 3000,
          amt: 2100,
        },
        {
          name: 'August',
          uv: 3490,
          $: 2600,
          amt: 2100,
        },
        {
          name: 'September',
          uv: 3490,
          $: 3100,
          amt: 2100,
        },
        {
          name: 'October',
          uv: 3490,
          $: 3500,
          amt: 2100,
        },
        {
          name: 'Nov',
          uv: 3490,
          $: 4000,
          amt: 2100,
        },
        {
          name: 'December',
          uv: 3490,
          $: 5000,
          amt: 2100,
        },
      ];
    return (
        <div className='container mt-4'>
            <div className="row g-2">
                <div className="col-md-4">
                    <div className="admin_box shadow rounded box_1 p-4">
                        <h5 className='text-success'>Total Income</h5>
                        <h2>$1000</h2>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="admin_box shadow rounded box_2 p-4">
                        <h5 className='text-success'>This Month Income</h5>
                        <h2>$100</h2>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className='admin_box shadow rounded box_3 p-4'>
                        <h5 className='text-info'>Total Sale</h5>
                        <h2>10</h2>
                    </div>
                </div>
            </div>
            {/* Chart ------------------------------------------------------------------------------------- */}
                <p className='text-secondary fs-4 mt-5 text-center font-weight-light'>Monthly Income History</p>
                <div className="chart_height p-4">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart width={300} height={100} data={data}>
                            <Tooltip />
                            <XAxis dataKey="name"/>
                            <YAxis/>
                            <Line type="monotone" dataKey="$" stroke="#8884d8" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div>
                    <p className='text-secondary fs-4'>Panding Order</p>
                </div>
        </div>
    );
};

export default DashBoardMain;