import Image from "next/image"


function MediumCard({ img, title }) {
    return (
        <div className="cursor-pointer hover:scale-105 transition duration-300 transform ease-out">
            <div className="relative h-60 w-60 sm:h-80 sm:w-80">
                <Image
                    className="rounded-xl"
                    src={img}
                    fill
                    sizes="(max-width: 768px) 100vw"
                    alt="Live Anywhere"
                />
            </div>
            <h3 className="text-2xl mt-3">{title}</h3>
        </div>
    )
}

export default MediumCard