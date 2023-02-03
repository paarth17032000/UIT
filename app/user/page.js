import Image from "next/image";

export default function User() {
    return (
        <main className='min-h-screen'>
             <nav className='flex items-center justify-between h-[72px] border border-b px-12'>
                    <Image src={TruffleLogo} alt="logo" width={248} />
                <div className='flex items-center justify-center w-[400px]'>
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
            <div></div>
        </main>
    )
}