export default function UserInfoSidebar() {
  return (
    <ol className="relative text-gray-500 border-l border-gray-200 dark:border-gray-200 dark:text-gray-400 m-12 h-[250px]">

        <li className="flex items-center mb-14 ml-6">
            <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-white ">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="30" height="30" rx="15" fill="white"/>
                <circle cx="16" cy="16" r="5" fill="#7445F8"/>
                <rect x="1" y="1" width="30" height="30" rx="15" stroke="#7445F8" stroke-width="2"/>
                </svg>
            </span>
            <h3 className="text-[#7445F8] text-[12px] font-[600] font-medium leading-tight">USER INFORMATION</h3>
        </li>

        <li className="flex items-center mb-14 ml-6">
            <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-white ">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="30" height="30" rx="15" fill="white"/>
                <circle cx="16" cy="16" r="5" fill="#7445F8"/>
                <rect x="1" y="1" width="30" height="30" rx="15" stroke="#7445F8" stroke-width="2"/>
                </svg>
            </span>
            <h3 className="text-[#6B7280] text-[12px] font-[600] font-medium leading-tight">ADMIN AND OPERATIONS</h3>
        </li>

        <li className="flex items-center mb-14 ml-6">
            <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-white ">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="30" height="30" rx="15" fill="white"/>
                <circle cx="16" cy="16" r="5" fill="#7445F8"/>
                <rect x="1" y="1" width="30" height="30" rx="15" stroke="#7445F8" stroke-width="2"/>
                </svg>
            </span>
            <h3 className="text-[#6B7280] text-[12px] font-[600] font-medium leading-tight">BUSINESS INFORMATION</h3>
        </li>

        <li className="flex items-center mb-14 ml-6">
            <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-white ">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="30" height="30" rx="15" fill="white"/>
                <circle cx="16" cy="16" r="5" fill="#7445F8"/>
                <rect x="1" y="1" width="30" height="30" rx="15" stroke="#7445F8" stroke-width="2"/>
                </svg>
            </span>
            <h3 className="text-[#6B7280] text-[12px] font-[600] font-medium leading-tight">UPLOAD DOCUMENTS</h3>
        </li>

    </ol>
  )
}
