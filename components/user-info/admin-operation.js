"use client"
import { useState } from "react"
import SelectComponent from "../utils/select-component"
import { corporationCountries } from "../utils/user-form-values"

export default function AdminOperation(){
    const [incorporation, setIncorporation] = useState(corporationCountries[0])
    const [operation, setOperation] = useState(corporationCountries[0])
    const [businessType, setBusinessType] = useState(corporationCountries[0])
    return (
        <div className="grid grid-cols-3 gap-8 mt-8">

            <div className="flex flex-col col-span-3">
                <label className="text-[#374151] text-[14px] font-[500]">Account ID</label>
                <input type="text" placeholder="" className="text-[#6B7280] text-[14px] rounded-[6px] border border-[#D1D5DB] outline-none px-3 py-2"/>
            </div>

            <div className="flex flex-col col-span-3">
                <label className="text-[#374151] text-[14px] font-[500]">Company Name</label>
                <input type="text" placeholder="" className="text-[#6B7280] text-[14px] rounded-[6px] border border-[#D1D5DB] outline-none px-3 py-2"/>
            </div>

            <div  className="grid grid-cols-2 col-span-3 gap-8">
                <SelectComponent label={'Country of Incorporation'} value={incorporation} method={setIncorporation} options={corporationCountries} className={'flex flex-col '} />
                <SelectComponent label={'Country of Operation'} value={operation} method={setOperation} options={corporationCountries} className={'flex flex-col '} />
            </div>

            <SelectComponent label={'Business Type'} value={businessType} method={setBusinessType} options={corporationCountries} className={'flex flex-col col-span-3'} />

            <div className="flex flex-col col-span-3">
                <label className="text-[#374151] text-[14px] font-[500]">Company Address</label>
                <input type="text" placeholder="Indian" className="text-[#6B7280] text-[14px] rounded-[6px] border border-[#D1D5DB] outline-none px-3 py-2"/>
            </div>

            <div className="flex flex-col">
                <label className="text-[#374151] text-[14px] font-[500]">ZIP / Postal</label>
                <input type="text" placeholder="name" className="text-[#6B7280] text-[14px] rounded-[6px] border border-[#D1D5DB] outline-none px-3 py-2"/>
            </div>

            <div className="flex flex-col">
                <label className="text-[#374151] text-[14px] font-[500]">State / Province</label>
                <input type="text" placeholder="name" className="text-[#6B7280] text-[14px] rounded-[6px] border border-[#D1D5DB] outline-none px-3 py-2"/>
            </div>

            <div className="flex flex-col">
                <label className="text-[#374151] text-[14px] font-[500]">City</label>
                <input type="text" placeholder="name" className="text-[#6B7280] text-[14px] rounded-[6px] border border-[#D1D5DB] outline-none px-3 py-2"/>
            </div>

            <div className="flex flex-col col-span-3">
                <label className="text-[#374151] text-[14px] font-[500]">Registration Number</label>
                <input type="text" placeholder="Indian" className="text-[#6B7280] text-[14px] rounded-[6px] border border-[#D1D5DB] outline-none px-3 py-2"/>
            </div>

            <div className="flex flex-col col-span-3">
                <label className="text-[#374151] text-[14px] font-[500]">Incorporation Date</label>
                <input type="date" placeholder="Indian" className="text-[#6B7280] text-[14px] rounded-[6px] border border-[#D1D5DB] outline-none px-3 py-2"/>
            </div>

        </div>
    )
}