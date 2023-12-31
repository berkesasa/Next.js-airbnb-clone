'use client'

import { useSearchParams } from 'next/navigation'
import Header from "./Header"
import format from 'date-fns/format';
import InfoCard from './InfoCard';
import Map from './Map';

export default function SearchResults({ results }) {

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
            <main className="flex max-xl:flex-col items-start">

                <section className="flex-grow pt-10 px-6 max-xl:order-2">
                    <p className="text-xs">300+ Stays - {dataSearch[0].dateRange} - for {dataSearch[0].noOfGuests} guests</p>
                    <h1 className="max-md:text-xl md:text-3xl font-semibold mt-2 mb-6">Stays in {queryLocation}</h1>
                    <div className="max-md:grid max-md:grid-cols-3 max-md:gap-5 md:inline-flex mb-5 md:space-x-3 flex-wrap text-gray-800 max-md:text-sm text-center">
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

                <section className='xl:sticky xl:top-[92px] inlife-flex max-xl:min-w-full xl:min-w-[500px] max-xl:h-[calc(50vh)] xl:h-[calc(100vh-92px)]'>
                    <Map results = {results} />
                </section>
            </main>
        </>

    )
}