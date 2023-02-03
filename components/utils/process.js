import CircleIcon from '@/public/assets/icons/dashboard-icons/Circle.png'

export const processes = [
    {
      name: 'Initiate Deployment',
      className: '',
      idleImage: CircleIcon,
      stepNumber: 1,
      lineDiv: <div className="bg-[#c1c1c1] w-[2px] ml-[11.4px] h-[45px] my-[2px]"></div>,
      completedLine: <div className="bg-[#9768FB] w-[2px] ml-[11.4px] h-[45px] my-[2px]"></div>,
      failedText: 'Initiate Deployment',
    },
    {
      name: 'Preparing Environment',
      className: '',
      idleImage: CircleIcon,
      stepNumber: 2,
      lineDiv: <div className="bg-[#c1c1c1] w-[2px] ml-[11.4px] h-[45px] my-[2px]"></div>,
      completedLine: <div className="bg-[#9768FB] w-[2px] ml-[11.4px] h-[45px] my-[2px]"></div>,
      failedText: 'Preparing Environment',
    },
    {
      name: 'Publishing Site',
      className: '',
      idleImage: CircleIcon,
      stepNumber: 3,
      lineDiv: <div className="bg-[#c1c1c1] w-[2px] ml-[11.4px] h-[45px] my-[2px]"></div>,
      completedLine: <div className="bg-[#9768FB] w-[2px] ml-[11.4px] h-[45px] my-[2px]"></div>,
      failedText: 'Publishing Site',
    }
]