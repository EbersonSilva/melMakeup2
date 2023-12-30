import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import Image from 'next/image'

import Avatar from '@/assets/avatar.png'

import { ContainerTestimonials, Description, HomeTestimonials } from './styles'

export function Testimonials() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    },
    loop: true,
  })

  return (
    <ContainerTestimonials>
      <HomeTestimonials ref={sliderRef} className="keen-slider">
        <Description className="keen-slider__slide">
          <Image src={Avatar} width={100} height={100} alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
            possimus, corrupti dolor molestiae quo blanditiis nihil numquam
            perferendis. Ipsa eius dolore ullam praesentium iusto blanditiis
            earum nobis eum quos ipsum!
          </p>
        </Description>
        <Description className="keen-slider__slide">
          <Image src={Avatar} width={100} height={100} alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
            possimus, corrupti dolor molestiae quo blanditiis nihil numquam
            perferendis. Ipsa eius dolore ullam praesentium iusto blanditiis
            earum nobis eum quos ipsum!
          </p>
        </Description>
        <Description className="keen-slider__slide">
          <Image src={Avatar} width={100} height={100} alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
            possimus, corrupti dolor molestiae quo blanditiis nihil numquam
            perferendis. Ipsa eius dolore ullam praesentium iusto blanditiis
            earum nobis eum quos ipsum!
          </p>
        </Description>
        <Description className="keen-slider__slide">
          <Image src={Avatar} width={100} height={100} alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
            possimus, corrupti dolor molestiae quo blanditiis nihil numquam
            perferendis. Ipsa eius dolore ullam praesentium iusto blanditiis
            earum nobis eum quos ipsum!
          </p>
        </Description>
      </HomeTestimonials>
    </ContainerTestimonials>
  )
}
