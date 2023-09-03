import Image from "next/image"


function LargeCard({ img, title, description, buttonText }) {
    return (
        <section className="relative my-16 cursor-pointer">
            <div className="relative h-96 sm:min-w-[300px]">
                <Image
                    className="rounded-2xl"
                    src={img}
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    alt="Live Anywhere"
                />
            </div>

            <div className="absolute  left-8 top-16 sm:left-12">
                <h3 className="text-2xl sm:text-4xl mb-2 sm:mb-3 w-64">{title}</h3>
                <p className="max-sm:w-40">{description}</p>
                <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-3 sm:mt-5">{buttonText}</button>
            </div>
        </section>
    )
}

export default LargeCard