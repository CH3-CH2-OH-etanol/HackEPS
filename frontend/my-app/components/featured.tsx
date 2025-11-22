import Image from "next/image"

export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <Image
          src="/images/6.jpeg"
          alt="Woman on horse in countryside"
          width={600}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4  font-extrabold ">In Los Angeles, every neighborhood is a world. And the world you choose, matters.</h3>
        <p className="text-2xl lg:text-4xl mb-8">
        Los Angeles’ hundreds of unique neighborhoods offer diverse lifestyles, from luxury isolation to vibrant community. Our tool simplifies your search by deeply analyzing the identity, demographics, and services of each location. Find the perfect ecosystem that truly fits how you live.
        </p>
      </div>
    </div>
  )
}
