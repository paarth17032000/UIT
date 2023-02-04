import CircleIcon from '@/public/assets/icons/dashboard-icons/Circle.png'

export const processes = [
    {
      name: 'USER INFORMATION',
      className: '',
      idleImage: CircleIcon,
      stepNumber: 1,
      lineDiv: <div className="bg-[#c1c1c1] w-[2px] ml-[11.4px] h-[45px] my-[2px]"></div>,
      completedLine: <div className="bg-[#9768FB] w-[2px] ml-[11.4px] h-[45px] my-[2px]"></div>,
    },
    {
      name: 'BUSINESS INFORMATION',
      className: '',
      idleImage: CircleIcon,
      stepNumber: 2,
      lineDiv: <div className="bg-[#c1c1c1] w-[2px] ml-[11.4px] h-[45px] my-[2px]"></div>,
      completedLine: <div className="bg-[#9768FB] w-[2px] ml-[11.4px] h-[45px] my-[2px]"></div>,
    },
    {
      name: 'UPLOAD DOCUMENTS',
      className: '',
      idleImage: CircleIcon,
      stepNumber: 3,
      lineDiv: <div className="bg-[#c1c1c1] w-[2px] ml-[11.4px] h-[45px] my-[2px]"></div>,
      completedLine: <div className="bg-[#9768FB] w-[2px] ml-[11.4px] h-[45px] my-[2px]"></div>,
      failedText: 'Assigning Buidlfy Subdomain',
    },
    {
      name: 'PREVIEW',
      className: '',
      idleImage: CircleIcon,
      stepNumber: 4,
      lineDiv: <></>,
      completedLine: <></>,
      failedText: 'Publish Failed, Please try Again',
    },
]