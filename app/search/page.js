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
    
    const searchResults = await getSearchResults();

    return (
        <div>

            <Suspense fallback={<SearchBarFallback />}>
                <SearchBar results={searchResults}/>
            </Suspense>

            <Footer />
        </div>
    )
}
