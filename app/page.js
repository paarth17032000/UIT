"use client"
import { useState } from 'react';
import Image from 'next/image'
import Calendar from 'react-calendar';
import { Line } from 'react-chartjs-2'
import {Chart as ChartJs} from 'chart.js/auto'
import { HiUserCircle } from 'react-icons/hi'
import { IoMdNotifications } from 'react-icons/io'
import {ImArrowUpRight2} from 'react-icons/im'
import {ImArrowDownRight2} from 'react-icons/im'
import TruffleLogo from '../public/assets/logos/Logo.png'
import Sidebar from '@/components/dashboard/sidebar'
import DashboardImg1 from '../public/assets/icons/dashboard-icons/dashboard-icon-1.png'
import DashboardImg2 from '../public/assets/icons/dashboard-icons/dashboard-icon-2.png'
import InfoImg from '../public/assets/icons/dashboard-icons/dashboard-icon-info.png'
import 'react-calendar/dist/Calendar.css';

const balanceMenu = [
  {name: 'Fiat Balance', balance: '$00,000', icon: DashboardImg1},
  {name: 'Crypto Balance',balance: '$00,000', icon: DashboardImg1},
  {name: 'Recievables', balance: '$00,000',icon: DashboardImg2},
  {name: 'Payables',balance: '$00,000', icon: DashboardImg2},
]

const stocks = [
  {icon : <ImArrowDownRight2 className='text-[32px] text-red-400' />, stock: 'QUICKSILVER LLC', id: 'TFID: 8045780', value: '$ 145,000.00'},
  {icon : <ImArrowUpRight2 className='text-[32px] text-green-400' />, stock: 'QUICKSILVER LLC', id: 'TFID: 8045780', value: '$ 145,000.00'},
  {icon : <ImArrowUpRight2 className='text-[32px] text-green-400' />, stock: 'QUICKSILVER LLC', id: 'TFID: 8045780', value: '$ 145,000.00'},
  {icon : <ImArrowDownRight2 className='text-[32px] text-red-400' />, stock: 'QUICKSILVER LLC', id: 'TFID: 8045780', value: '$ 145,000.00'},
  {icon : <ImArrowUpRight2 className='text-[32px] text-green-400' />, stock: 'QUICKSILVER LLC', id: 'TFID: 8045780', value: '$ 145,000.00'},
  {icon : <ImArrowDownRight2 className='text-[32px] text-red-400' />, stock: 'QUICKSILVER LLC', id: 'TFID: 8045780', value: '$ 145,000.00'},
]

const data = {
  labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  legend: {
    position: "bottom"
  },
  title: {
    display: true,
    text: "Chart.js Line Chart"
  },
  datasets: [
    {
      label: "Assets",
      data: [60, 25, 300, 200, 500, 300, 400, 250, 450],
      fill: false,
      borderColor: "#82D616"
    },
    {
      label: "Liabilities",
      data: [40, 100, 200, 25, 150, 100, 440, 80, 350],
      fill: false,
      borderColor: "#FF8540"
    }
  ]
};


export default function Home() {
  const [value, onChange] = useState(new Date());
  return (
    <main className='min-h-screen bg-[#F8F9FA]'>
      <nav className='flex h-[72px] border border-b'>
        <div className='flex items-center justify-center w-[264px]'>
          <Image src={TruffleLogo} alt="logo" />
        </div>
        <div className='flex items-center justify-between flex-1 px-6'>
          <div className='text-[#252F40] text-[24px] font-[700]'>Dashboard</div>
          <div className='flex items-center text-[#67748E] text-[14px] gap-2'>
            <HiUserCircle />
            <span>Evan Winter</span>
            <IoMdNotifications />
          </div>
        </div>
      </nav>

      <div className='flex'>
        <Sidebar />
        <div className='min-h-[calc(100vh-72px)] flex-1 py-3.5 px-6'>

          {/* top indicator bar */}
          <div className='flex bg-[#8553FB] px-5 py-4 gap-5 rounded-[8px] mb-2'>
            <Image src={InfoImg} alt='icon' width={32} height={27} />
            <div className='flex flex-col text-white'>
              <div className='text-[12px] font-[500]'>Plese complete the KYC</div>
              <div className='text-[10px]'>Please follow the instructions in the email to complete account verification. Make sure to check your promotions/spam as well. </div>
            </div>
          </div>

          {/* grid */}
          <div className='grid grid-cols-12 gap-5 my-5'>

            <div className='grid grid-cols-2 col-span-8 gap-5 '>
              {balanceMenu.map(balanceItem => (
                <div key={balanceItem.name} className='flex items-center justify-between h-[120px] bg-white py-7 px-6 rounded-[16px] shadow-design'>
                  <div className='flex flex-col'>
                    <div className='text-[#67748E] text-[16px]'>{balanceItem.name}</div>
                    <div className='text-[#252F40] text-[24px] font-[700]'>{balanceItem.balance}</div>
                  </div>
                  <Image src={balanceItem.icon} alt='icon' width={60} height={60} />
                </div>
              ))}
              <div className='col-span-2 bg-white px-6 py-4 rounded-[16px] shadow-design'><Line data={data} /></div>
            </div>

            <div className='col-span-4 bg-white rounded-[16px] shadow-design'>
              <div className='m-4'>
                <Calendar className='w-full border-none' onChange={onChange} value={value} />
              </div>
              <hr className='w-3/4 mx-auto ' />
              <div className='my-4'>

                {stocks.map((stock, index) => (
                  <div key={index} className='flex items-center justify-between text-[#111827] my-2 mx-4 p-4'>
                    <div className='flex items-center gap-4'>
                      {stock.icon}
                      <div className='flex flex-col'>
                        <div className='text-[16px] font-[500]'>{stock.stock}</div>
                        <div className='text-[12px]'>{stock.id}</div>
                      </div>
                    </div>
                    <div className='text-[16px] font-[500]'>{stock.value}</div>
                  </div>
                ))}


              </div>
            </div>
          </div>

        </div>
      </div>
      <div></div>
    </main>
  )
}
