import Image from "next/image"

function SmallCards({ img, location, distance }) {
    return (

        <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform ease-out duration-200">

            <div className="relative h-16 w-16">
                <Image
                    className="rounded-lg"
                    src={img}
                    fill
                    sizes="(max-width: 768px) 100vw"
                    alt="Explore Nearby"
                />
            </div>

            <div>
                <h2> {location} </h2>
                <h3 className="text-gray-500"> {distance} </h3>
            </div>
        </div>


    )
}

export default SmallCards