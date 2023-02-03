"use client"
import Image from "next/image";
import TruffleLogo from '@/public/assets/logos/Logo.png'
import { HiUserCircle } from "react-icons/hi";
import { IoMdNotifications } from "react-icons/io";
import { processes } from "@/components/utils/process";
import CircleIcon from '@/public/assets/icons/dashboard-icons/Circle.png'
import { useEffect, useState } from "react";
import UserInfo from "@/components/user-info/user-info";
import AdminOperation from "@/components/user-info/admin-operation";
import UserInfoSidebar from "@/components/user-info/user-info-sidebar";


export default function User() {
    const [currentStep, setCurrentStep] = useState(1)
    const [pageDetails, setPageDetails] = useState({
        heading: 'User Information',
        description: 'Please enter your details'
    })
    useEffect(() => {
        switch(currentStep) {
            case 1:
                setPageDetails({
                    heading: 'User Information',
                    description: 'Please enter your details'
                })
                break;
            
            case 2:
                setPageDetails({
                    heading: 'Business Information',
                    description: 'Use a permanent address where you can receive mail.'
                })
                break;
            
            default:
                return;
        }
    }, [currentStep])
    const handleBack = () => {
        setCurrentStep(1)
    }
    const handleNext = () => {
        setCurrentStep(2)
    }
    
    return (
        <main className='min-h-screen'>
             <nav className='flex items-center justify-between h-[72px] border border-b px-12'>
                    <Image src={TruffleLogo} alt="logo" width={166}  />
            
                <div className='text-[#67748E] text-[14px]'>
                    Having Trouble?<span className="text-[#7445F8] font-[600] cursor-pointer ml-1">Get Help</span>
                </div>
            </nav>

            <div className="flex">

                <div className='flex w-[400px] bg-[#FAFAFA] min-h-[calc(100vh-72px)]'>

                    <UserInfoSidebar />

                </div>


                {/* main area */}
                <div className='flex-1 min-h-[calc(100vh-72px)] py-12 px-24'>
                    <div className="">
                        <div className="text-[#111827] text-[20px] font-[600]">{pageDetails.heading}</div>
                        <div className="text-[#6B7280] text-[14px]">{pageDetails.description}</div>
                    </div>

                    {currentStep === 1 ?  <UserInfo /> : <AdminOperation />}
                   

                    <div className="flex items-center justify-between mt-8 text-[16px] font-[500]">
                        <button disabled={currentStep === 1} onClick={handleBack} className="text-[#374151] py-2 px-10 inline-block rounded-[6px] border border-[#D1D5DB] cursor-pointer shadow-md">Back</button>
                        <button disabled={currentStep === 2} onClick={handleNext} className="text-white py-2 px-10 inline-block rounded-[6px] bg-[#7445F8] cursor-pointer shadow-md">Next</button>
                    </div>
                </div>
            </div>
        </main>
    )
}