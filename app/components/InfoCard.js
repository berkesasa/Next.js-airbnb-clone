import Image from "next/image"
import { HeartIcon } from "@heroicons/react/24/outline"
import { StarIcon } from "@heroicons/react/24/solid"

function InfoCard({ img, location, title, description, star, price, total }) {
    return (
        <div className="flex max-md:flex-col py-7 px-2 md:pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition durtion-200 ease-out first:border-t">
            <div className="relative w-full h-52 md:w-80 flex-shrink-0 object-cover">
                <Image
                    src={img}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw"
                    style={{ objectFit: "cover" }}
                    alt="Placement Image"
                />
            </div>
            <div className="flex flex-col flex-grow md:pl-5 max-md:pt-3">
                <div className="flex justify-between">
                    <p> {location} </p>
                    <HeartIcon className="h-7 cursor-pointer" />
                </div>
                <h4 className="text-xl">{title}</h4>

                <div className="border-b w-10 pt-2" />

                <p className="pt-2 text-sm text-gray-600 flex-grow"> {description} </p>

                <div className="flex justify-between items-center pt-5 max-md:pt-2">
                    <p className="flex">
                        <StarIcon className="h-5 text-red-400 flex-grow" />
                        {star}
                    </p>
                    <div>
                        <p className="text-lg font-semibold pb-2 lg:text-2xl"> {price} </p>
                        <p className="text-right font-extralight "> {total} </p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default InfoCard