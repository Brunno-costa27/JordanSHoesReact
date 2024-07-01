import tenis1 from '../assets/tenis-01.png'
import tenis2 from '../assets/tenis-02.png'
import tenis3 from '../assets/tenis-03.png'
import tenis4 from '../assets/tenis-04.png'
import tenis5 from '../assets/tenis-05.png'
import tenis6 from '../assets/tenis-06.png'
import { v4 as uuidv4 } from 'uuid';
import { Card } from './Card'

export function Main(){

    const data = [
        {
            id: uuidv4(),
            img: tenis1,
            title: 'Air Jordan 1 Mid Dutch Green',
            subTitle: 'Tênis Air Jordan',
            value: 'R$ 1.199,99'
        },
        {
            id: uuidv4(),
            img: tenis2,
            title: 'Air Jordan 1 High Zoom CMFT Tropical Twist',
            subTitle: 'Tênis Air Jordan',
            value: 'R$ 1.049,00'
        },
        {
            id: uuidv4(),
            img: tenis3,
            title: 'Air Jordan 1 Mid Dutch Green',
            subTitle: 'Tênis Air Jordan',
            value: 'R$ 1.350,00'
        },
        {
            id: uuidv4(),
            img: tenis4,
            title: 'Air Jordan 1 Mid GS "Light Smoke Grey',
            subTitle: 'Tênis Air Jordan',
            value: 'R$ 1.585,00'
        },
        {
            id: uuidv4(),
            img: tenis5,
            title: 'Air Jordan 1 Mid SE Bright Citrus',
            subTitle: 'Tênis Air Jordan',
            value: 'R$ 949,99'
        },
        {
            id: uuidv4(),
            img: tenis6,
            title: 'Air Jordan 1 Mid Grey Camo',
            subTitle: 'Tênis Air Jordan',
            value: 'R$ 999,99'
        },

    ]

    return (
        <section className='w-full px-10 sm:px-40 mt-10 font-archivo flex flex-col justify-center items-center'>
            {/* título dos cards */}
            <div className='flex flex-col justify-center items-center gap-5 sm:w-[600px] min-w-12'>
                <div className='font-bold sm:text-3xl text-xl'>
                    <p>Os melhores em só lugar</p>
                </div>
                <div className='sm:text-2xl text-base text-center w-full tracking-tighter'>
                    <p>A marca Jordan na JordanShoes é a escolha certa para os amantes de sneakers que buscam estilo e conforto.</p>
                </div>
            </div>
            {/* Cards */}
            <div className='w-full mt-16 grid sm:grid-cols-3 gap-5'>
                {
                    data.map((item) =>(
                        <Card
                            id={item.id}
                            img={item.img}
                            title={item.title}
                            subTitle={item.subTitle}
                            value={item.value}
                        />
                    ))
                }
            </div>
        </section>
    )
}