"use client"
import { Fragment, useState } from "react"; 
import { Listbox } from "@headlessui/react";
import {FiChevronDown} from 'react-icons/fi'
import SelectComponent from "../utils/select-component";
import { titles, genders, countries, nationalities } from "../utils/user-form-values";

export default function UserInfo(){
    const [title, setTitle] = useState(titles[0])
    const [gender, setGender] = useState(genders[0])
    const [country, setCountry] = useState(countries[0])
    const [nationality, setNationality] = useState(nationalities[0])
    return (
        <div className="grid grid-cols-3 gap-8 mt-8">

            <SelectComponent label={'Title'} value={title} method={setTitle} options={titles} className={'flex flex-col '} />

            <div className="flex flex-col">
                <label className="text-[#374151] text-[14px] font-[500]">First Name</label>
                <input type="text" placeholder="John" className="h-[40px] text-[#6B7280] text-[14px] rounded-[6px] border border-[#D1D5DB] outline-none px-3 py-2"/>
            </div>

            <div className="flex flex-col">
                <label className="text-[#374151] text-[14px] font-[500]">Last Name</label>
                <input type="text" placeholder="Doe" className="text-[#6B7280] text-[14px] rounded-[6px] border border-[#D1D5DB] outline-none px-3 py-2"/>
            </div>

            <div className="flex flex-col col-span-3">
                <label className="text-[#374151] text-[14px] font-[500]">Mobile Number</label>
                <div className="flex items-center w-full">
                    <SelectComponent value={country} method={setCountry} options={countries} className={'flex flex-col w-[100px]'} />
                    <input type="text" placeholder="+91 2348 323 5692" className="text-[#6B7280] text-[14px] rounded-[6px] w-full border border-[#D1D5DB] outline-none px-3 py-2"/>
                </div>
            </div>

            <SelectComponent label={'Gender'} value={gender} method={setGender} options={genders} className={'flex flex-col col-span-3'} />

            <SelectComponent label={'Nationality'} value={nationality} method={setNationality} options={nationalities} className={'flex flex-col col-span-3'} />

            <div  className="grid grid-cols-2 col-span-3 gap-8">

                <div className="flex flex-col">
                    <label className="text-[#374151] text-[14px] font-[500]">Residential Area</label>
                    <input type="text" placeholder="area-xyz" className="text-[#6B7280] text-[14px] rounded-[6px] border border-[#D1D5DB] outline-none px-3 py-2"/>
                </div>

                <div className="flex flex-col col-span-1/2">
                <label className="text-[#374151] text-[14px] font-[500]">Postal Code</label>
                <input type="text" placeholder="219412" className="text-[#6B7280] text-[14px] rounded-[6px] border border-[#D1D5DB] outline-none px-3 py-2"/>
            </div>
            </div>

            

            <div className="flex flex-col col-span-3">
                <label className="text-[#374151] text-[14px] font-[500]">Occupation</label>
                <input type="text" placeholder="Plumber" className="text-[#6B7280] text-[14px] rounded-[6px] border border-[#D1D5DB] outline-none px-3 py-2"/>
            </div>

            <div className="flex flex-col col-span-3">
                <label className="text-[#374151] text-[14px] font-[500]">D.O.B</label>
                <input type="date" placeholder="Indian" className="text-[#6B7280] text-[14px] rounded-[6px] border border-[#D1D5DB] outline-none px-3 py-2"/>
            </div>

        </div>
    )
}