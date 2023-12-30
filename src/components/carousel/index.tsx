import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import Image from 'next/image'

import camiseta1 from '@/assets/Property 1=2_explorer-t-shirt 1.png'
import camiseta2 from '@/assets/Property 1=Camisa-Maratona 1.png'
import camiseta3 from '@/assets/Property 1=IgniteLab-T-shirt 1.png'
import camiseta4 from '@/assets/Property 1=Igniter-abord-2-t-shirt 1.png'
import { ContainerCarousel, HomeCarousel, Photo } from './styles'

export function Carousel() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
    loop: true,
  })

  return (
    <ContainerCarousel>
      <HomeCarousel ref={sliderRef} className="keen-slider">
        <Photo className="keen-slider__slide">
          <Image src={camiseta1} width={520} height={480} alt="" />
        </Photo>
        <Photo className="keen-slider__slide">
          <Image src={camiseta2} width={520} height={480} alt="" />
        </Photo>
        <Photo className="keen-slider__slide">
          <Image src={camiseta3} width={520} height={480} alt="" />
        </Photo>
        <Photo className="keen-slider__slide">
          <Image src={camiseta4} width={520} height={480} alt="" />
        </Photo>
      </HomeCarousel>
    </ContainerCarousel>
  )
}
