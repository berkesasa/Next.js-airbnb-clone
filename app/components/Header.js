"use client"
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import Image from "next/image"
import {
    MagnifyingGlassIcon,
    GlobeAltIcon,
    Bars3Icon,
} from '@heroicons/react/24/outline'
import { UserCircleIcon, UsersIcon } from '@heroicons/react/24/solid'
import { useState } from "react"


function Header() {

    const imageLoader = ({ src, width, quality }) => {
        return `https://upload.wikimedia.org${src}?w=${width}&q=${quality || 75}`
    }
    const [searchInput, setSearchInput] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfGuests, setNoOfGuests] = useState(1);

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }

    const resetInput = () => {
        setSearchInput("")
    }



    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 p-5 bg-white shadow-md md:px-10">

            {/* left */}
            <div className="relative flex items-center my-auto cursor-pointer">
                <Image
                    className="h-6 sm:h-10"
                    loader={imageLoader}
                    src="/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
                    width={512}
                    height={160}
                    priority
                    style={{ objectFit: "contain", objectPosition: "left" }}
                    alt="Airbnb Logo"
                />
            </div>

            {/* mid-search */}
            <div className="flex items-center py-1 sm:py-2 border-2 rounded-full md:shadow-sm overflow-hidden">
                <input
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className="flex-grow pl-2 sm:pl-5 text-xs md:text-sm text-gray-600 placeholder-gray-400 bg-transparent outline-none" type="text" placeholder="Start your search" />
                <MagnifyingGlassIcon className="hidden h-8 p-2 text-white bg-red-400 rounded-full cursor-pointer md:inline-flex md:mx-2 flex-shrink-0" />
            </div>

            {/* right */}
            <div className="flex space-x-2 md:space-x-4 items-center justify-end text-gray-500">
                <p className="hidden md:inline cursor-pointer">Become a host</p>
                <GlobeAltIcon className="h-5 sm:h-6 flex-shrink-0" />

                <div className="flex items-center space-x-2 border-2 p-1 sm:p-2 rounded-full">
                    <Bars3Icon className="h-5 sm:h-6" />
                    <UserCircleIcon className="h-5 sm:h-6" />
                </div>
            </div>

            {searchInput && (
                <div className='flex flex-col col-span-3 mx-auto'>
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={['#FD5B61']}
                        onChange={handleSelect}
                    />
                    <div className='flex items-center border-b mb-4 pb-1'>
                        <h2 className='text-2xl flex-grow font-semibold'>Number of Guests</h2>
                        <UsersIcon className='h-5' />
                        <input min={1} value={noOfGuests} onChange={(e) => setNoOfGuests(e.target.value)} className='w-12 pl-2 text-lg text-red-400 outline-none' type="number" />
                    </div>
                    <div className='flex'>
                        <button onClick={resetInput} className='flex-grow text-gray-500'>Cancel</button>
                        <button className='flex-grow text-red-400'>Search</button>
                    </div>
                </div>
            )}

        </header>
    )
}

export default Header