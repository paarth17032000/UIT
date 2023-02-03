"use client"
import { Fragment } from "react";
import { Listbox } from "@headlessui/react";
import { FiChevronDown } from "react-icons/fi";

export default function SelectComponent({label, value, method, options, className}) {
  return (
    <div className={className}>
        {label && <label className="text-[#374151] text-[14px] font-[500] ">{label}</label>}
        <Listbox as={'div'} className="relative" value={value} onChange={method}>
            <Listbox.Button className="flex items-center justify-between w-full text-[#6B7280] text-[14px] rounded-[6px] border border-[#D1D5DB] outline-none px-3 py-2">
                <span className="text-[#6B7280] text-[14px]">{value}</span>
                <FiChevronDown />
            </Listbox.Button>
            <Listbox.Options
            className="absolute z-[10] bg-white border my-2 rounded-[8px] shadow-lg w-full"
            >
            {options.map((optionVal) => (
                <Listbox.Option key={optionVal} value={optionVal} as={Fragment}>
                {({ active }) => (
                    <li
                    className={`${active ? 'bg-blue-500 text-white' : 'bg-white text-[#6B7280]'} text-[14px] py-1 cursor-pointer px-3 rounded-md`}
                    >
                    {optionVal}
                    </li>
                )}
                </Listbox.Option>
            ))}
            </Listbox.Options>
        </Listbox>
    </div>
  )
}
