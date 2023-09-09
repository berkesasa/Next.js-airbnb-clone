'use client'

import { useSearchParams } from 'next/navigation'
import Header from "./Header"
import format from 'date-fns/format';
import InfoCard from './InfoCard';
import Map from './Map';

export default function SearchResults({ results, mapStyle }) {

    const searchParams = useSearchParams();

    const queryLocation = searchParams.get("location");
    const queryStartDate = searchParams.get("startDate");
    const queryEndDate = searchParams.get("endDate");
    const queryNoOfGuests = searchParams.get("noOfGuests");

    const formattedStartDate = format(new Date(queryStartDate), "dd MMMM yy")
    const formattedEndDate = format(new Date(queryEndDate), "dd MMMM yy")
    const range = `${formattedStartDate} - ${formattedEndDate}`

    const dataSearch = [
        {
            location: queryLocation,
            startDate: formattedStartDate,
            endDate: formattedEndDate,
            noOfGuests: queryNoOfGuests,
            dateRange: range,
        }
    ]


    return (

        <>
            <Header placeholder={`${dataSearch[0].location} | ${dataSearch[0].dateRange} | ${dataSearch[0].noOfGuests} guests`} />
            <main className="flex items-start">

                <section className="flex-grow pt-10 px-6">
                    <p className="text-xs">300+ Stays - {dataSearch[0].dateRange} - for {dataSearch[0].noOfGuests} guests</p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {queryLocation}</h1>
                    <div className="hidden md:inline-flex mb-5 space-x-3 flex-wrap text-gray-800">
                        <p className="button">Cancellation Flexibility</p>
                        <p className="button">Type of Place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms and Beds</p>
                        <p className="button">More Filters</p>
                    </div>

                    {results?.map(({ img, location, title, description, star, price, total }) => (
                        <InfoCard
                            key={img}
                            img={img}
                            location={location}
                            title={title}
                            description={description}
                            star={star}
                            price={price}
                            total={total}
                        />
                    ))}

                </section>

                <section className='sticky top-[92px] inlife-flex min-w-[800px] h-[calc(100vh-92px)]'>
                    <Map results = {results} mapStyle={mapStyle} />
                </section>
            </main>
        </>

    )
}