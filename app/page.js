import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LargeCard from "./components/LargeCard";
import MediumCard from "./components/MediumCard";
import SmallCards from "./components/SmallCards";


async function getNearby() {
  const nearby = await fetch('https://www.jsonkeeper.com/b/4G1G')
  return nearby.json()
}

async function getLive() {
  const live = await fetch('https://www.jsonkeeper.com/b/VHHT')
  return live.json()
}



export default async function Home() {

  const dataNearby = await getNearby();
  const dataLive = await getLive();

  
  return (
    <div>

      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">

        <section className="mt-10">
          <h2 className="text-3xl sm:text-4xl font-semibold">Explore Nearby</h2>
          {/* Pull some data from a server - API endpoints */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {dataNearby?.map(({ img, distance, location }) => (
              <SmallCards
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl sm:text-4xl font-semibold my-8 sm:my-10">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {dataLive?.map(({img, title}) => (
              <MediumCard
                key={img}
                img={img}
                title={title}
              />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
        />

      </main>

      <Footer />

    </div>
  )
}

