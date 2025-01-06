"use client"

import { NftCarousel } from '../../../../types/types'
import Image from 'next/image'
import useEmblaCarousel from "embla-carousel-react"
import AutoPlay from "embla-carousel-autoplay"

AutoPlay.globalOptions = { delay: 8000 };

function CarouselContent({ carousel }: { carousel: NftCarousel[] }) {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [AutoPlay()]);

  return (
    <div className="overflow-hidden relative cursor-pointer" ref={emblaRef}>
      {/* Embla Track */}
      <div className="flex">
        {carousel.map((item, index) => (
          <div key={index} className="relative min-w-full flex-shrink-0">
            <Image
              alt={item.title}
              src={item.image}
              width={1080}
              height={920}
              className="w-full h-[90vh] object-cover object-top"
            />
            {/* Overlay Content */}
            <div
              className="absolute top-0 z-20 bg-transparent mt-0 left-0 
              xl:pt-52 pt-40 h-full w-full bg-gradient-to-r 
              from-gray-900/90 to-transparent space-y-5 p-10 text-white
              font-nunito"
            >
              <p className="uppercase">{item.title}</p>
              <p className='max-w-xl line-clamp-3'>{item.description}</p>
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarouselContent;