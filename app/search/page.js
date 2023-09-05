"use client"
import { useSearchParams } from "next/navigation"
import Footer from "../components/Footer"
import Header from "../components/Header"
import format from "date-fns/format"

function Search() {

    const searchParams = useSearchParams();

    const queryLocation = searchParams.get("location");
    const queryStartDate = searchParams.get("startDate");
    const queryEndDate = searchParams.get("endDate");
    const queryNoOfGuests = searchParams.get("noOfGuests");

    const formattedStartDate = format(new Date(queryStartDate), "dd MMMM yy")
    const formattedEndDate = format(new Date(queryEndDate), "dd MMMM yy")
    const range = `${formattedStartDate}-${formattedEndDate}`
    
    return (
        <div>
            <Header placeholder={`${queryLocation} | ${range} | ${queryNoOfGuests} guests`} />
            <main className="flex">
                <section className="'flex-grow mt-10 px-6">
                    <p className="text-xs">300+ Stays - {range} - for {queryNoOfGuests} guests</p>

                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {queryLocation}</h1>

                    <div className="hidden md:inline-flex mb-5 space-x-3 flex-wrap text-gray-800">
                        <p className="button">Cancellation Flexibility</p>
                        <p className="button">Type of Place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms and Beds</p>
                        <p className="button">More Filters</p>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    )
}

export default Search