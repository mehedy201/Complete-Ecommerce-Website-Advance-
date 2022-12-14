import React from 'react';
import './DashBoardMain.css'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import ManageOrder from '../ManageOrder/ManageOrder';

const DashBoardMain = () => {

    // Chart Data Monthly Incom-----------------------------------------------------
    const data = [
        {
          name: 'Jan',
          uv: 4000,
          $: 150,
          amt: 2400,
        },
        {
          name: 'Feb',
          uv: 3000,
          $: 500,
          amt: 2210,
        },
        {
          name: 'Mar',
          uv: 2000,
          $: 1000,
          amt: 2290,
        },
        {
          name: 'Apr',
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
          name: 'Jun',
          uv: 2390,
          $: 2500,
          amt: 2500,
        },
        {
          name: 'Jul',
          uv: 3490,
          $: 3000,
          amt: 2100,
        },
        {
          name: 'Aug',
          uv: 3490,
          $: 2600,
          amt: 2100,
        },
        {
          name: 'Sep',
          uv: 3490,
          $: 3100,
          amt: 2100,
        },
        {
          name: 'Oct',
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
          name: 'Dec',
          uv: 3490,
          $: 5000,
          amt: 2100,
        },
      ];
      // Chart Data Category wise Profit
      const data0 = [
        { name: 'Laptop', value: 400 },
        { name: 'SmartPhone', value: 300 },
        { name: 'Camera', value: 300 },
        { name: 'Gaming', value: 200 },
        { name: 'Headphones', value: 300 },
        { name: 'Speakers', value: 400 },
        { name: 'Monitor', value: 250 },
      ];
      
      const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#4251f5', '#84f542', '#e642f5'];
      
      const RADIAN = Math.PI / 180;
      const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };
      
    return (
        <div className='container mt-4'>
            <div className="row g-2">
                <div className="col-md-4">
                    <div className="admin_box shadow rounded box_1 px-4 py-3">
                        <div className='p-3 w-100 shadow rounded'>
                          <h5 className='fw-bold mb-1 p-2 rounded text-white for_admin_shadow'>Total Income</h5>
                          <p className='mb-2 fs-4 fw-bold'>$ 1000</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="admin_box shadow rounded box_2 px-4 py-3">
                        <div className='p-3 w-100 shadow rounded'>
                          <h5 className='fw-bold mb-1 text-white for_admin_shadow p-2 rounded'>Last Month</h5>
                          <p className='mb-2 fs-4 fw-bold'>$ 100</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className='admin_box shadow rounded box_3 px-4 py-3'>
                        <div className='p-3 w-100 shadow rounded'>
                          <h5 className='fw-bold mb-1 text-white for_admin_shadow p-2 rounded'>Total Sale</h5>
                          <p className='mb-2 fs-4 fw-bold'>10</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Chart ------------------------------------------------------------------------------------- */}
              <div className="row py-5 px-4">
                <div className="col-md-8 chart_height">
                  <p className='text-secondary fs-4 ms-4 fw-light'>Monthly Income History</p>
                    <ResponsiveContainer width="100%" height="80%">
                        <LineChart width={300} height={100} data={data}>
                            <Tooltip />
                            <XAxis dataKey="name"/>
                            <YAxis/>
                            <Line type="monotone" dataKey="$" stroke="#8884d8" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="col-md-4 chart_height">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={350} height={350}>
                      <Tooltip />
                      <Pie
                        data={data0}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        >
                        {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                    </PieChart>
                 </ResponsiveContainer>
                </div>
              </div>
              <div>
                <ManageOrder/>
              </div>
        </div>
    );
};

export default DashBoardMain;