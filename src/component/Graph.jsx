
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
function Graph() {
  return (
    <div className= '  py-1 px-1 mt-1  shadow-2xl cursor-pointer  shadow-slate-900  max-w-fit     mb-10 h-96 relative bg-slate-50 rounded-md  top-0 left-0  max-w-4xl  items-center left-10'>
       <BarChart className=' cursor-pointer'
      series={[
        { data: [35, 44, 24, 34] },
        { data: [51, 6, 49, 30] },
        { data: [15, 25, 30, 50] },
        { data: [60, 50, 15, 25] },
      ]}
      height={290}
      xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
    </div>
  )
}
 export  default Graph