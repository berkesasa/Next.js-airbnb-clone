import { Suspense } from 'react'
import SearchBar from '../components/SearchResults'
import Footer from "../components/Footer"
import Header from "../components/Header"
import format from "date-fns/format"

function SearchBarFallback() {
    return <>placeholder</>
}

async function getSearchResults() {
    const results = await fetch('https://www.jsonkeeper.com/b/5NPS')
    return results.json()
}


export default async function Search() {
    
    const denemeApi = process.env.DENEME_API
    const mapStyle = `https://api.maptiler.com/maps/067adaad-17b2-4574-9e2c-cdd91074ecbb/style.json?key=${denemeApi}`
    const searchResults = await getSearchResults();

    return (
        <div>

            <Suspense fallback={<SearchBarFallback />}>
                <SearchBar results={searchResults} mapStyle={mapStyle} />
            </Suspense>

            <Footer />
        </div>
    )
}
