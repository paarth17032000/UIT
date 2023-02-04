import Image from 'next/image'
import DashoardIcon from '@/public/assets/icons/sidebar-icons/sidebar-icon-1.png'
import InvoiceIcon from '@/public/assets/icons/sidebar-icons/sidebar-icon-2.png'
import ProformaIcon from '@/public/assets/icons/sidebar-icons/sidebar-icon-3.png'
import Link from 'next/link'

export default function Sidebar() {
    return (
        <div className='flex justify-center w-[264px] min-h-[calc(100vh-72px)] border-r border-top-none' >
          <div className='flex flex-col gap-4 my-4 w-[200px]'>
                <div className='flex items-center gap-3 px-4 py-3 bg-white rounded-[8px] cursor-pointer'>
                  <Image src={DashoardIcon} alt="logo" width={32} height={32} />
                  <span>Dashboard</span>
                </div>
                <div className='flex items-center gap-3 px-4 py-3 hover:bg-white rounded-[8px] cursor-pointer'>
                  <Image src={InvoiceIcon} alt="logo" width={32} height={32} />
                  <span>Invoice</span>
                </div>
                <div className='flex items-center gap-3 px-4 py-3 hover:bg-white rounded-[8px] cursor-pointer'>
                  <Image src={ProformaIcon} alt="logo" width={32} height={32} />
                  <span className='line-through'>Performa</span>
                </div>
                <Link href='/user' className='flex items-center gap-3 px-4 py-3 hover:bg-white rounded-[8px] cursor-pointer'>
                  <Image src={ProformaIcon} alt="logo" width={32} height={32} />
                  <span>User</span>
                </Link>
          </div>
        </div>
    )
}