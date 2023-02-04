import completeImg from '@/public/assets/icons/dashboard-icons/Circle-complete.png'
import EmptyImg from '@/public/assets/icons/dashboard-icons/Circle-empty.png'
import Image from 'next/image';

export default function UserInfoSidebar({processes, currentStep}) {
  return (
    <div className='flex p-12 flex-col w-[400px] bg-[#FAFAFA] min-h-[calc(100vh-72px)]'>
        {processes.map(process => {
            const { name, className, idleImage, lineDiv, stepNumber, completedLine } = process;
            return (
                <div className={`flex gap-3 ${className}`}>
                    <div className="items-center">
                    { (stepNumber < currentStep) ? (
                            <>
                                <Image src={completeImg} alt="icon" width={24} height={24} />
                                {completedLine}
                            </>
                        ) : (stepNumber === currentStep) ? (
                            <>
                                <Image src={idleImage} alt="icon" width={24} height={24} />
                                {lineDiv}
                            </>
                        ) : (
                            <>
                                <Image src={EmptyImg} alt="icon" width={24} height={24} />
                                {lineDiv}
                            </>
                        )}
                    </div>
                    {(stepNumber < currentStep) ? (
                            <div className="text-[#14142B] text-[14px] font-[600]">{name}</div>
                        ) : (stepNumber === currentStep) ? (
                            <div className="text-[#7445F8] text-[12px] font-[600] font-medium ">{name}</div>
                        ) : (
                            <div className="text-[#6B7280] text-[12px] font-[600] font-medium leading-tight">{name}</div>
                        )}
                </div>
            );
        })}
    </div>
  )
}
