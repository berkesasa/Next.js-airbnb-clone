"use client"
import Image from "next/image"


function Banner() {

    const imageLoader = ({ src, width, quality }) => {
        return(`https://a0.muscache.com${src}?w=${width}&q=${quality || 75}`)
    }

    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
            <Image
                src="/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg"
                loader={imageLoader}
                fill
                priority
                style={{ objectFit: "cover", objectPosition: "bottom" }}
                alt="Banner"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
                <button className="text-purple-500 bg-white max-sm:text-sm px-6 sm:px-10 py-3 sm:py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">I am flexible</button>
            </div>
        </div>
    )
}

export default Banner