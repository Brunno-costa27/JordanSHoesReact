import logo from '../assets/logo.svg'

export function Header(){
    
    return (
        <header className=' font-archivo'>
            <div className="flex justify-center items-center h-16 sm:text-2xl text-[#121214] leading-6 px-5 p-y">
                <p>Frete grátis para todo o Brasil</p>
            </div>

            <div className="w-full sm:h-[400px] sm:flex sm:flex-col justify-center items-start gap-12 text-white px-40 bg-cover relative" 
            style={{
                backgroundImage: "url('src/assets/jordan.png')",
                }}>

                <div className='absolute inset-0 bg-black opacity-70 z-10'>

                </div>
                <div className='z-10 flex justify-center items-center'>
                    <img src={logo} alt="" />
                    <p>JordanSHoes</p>
                </div>

                <div className="z-10  relative w-[33%] flex flex-col gap-4">
                    <p className='text-2xl'>A melhor lojas de jordan</p>
                    <p>O tênis Jordan é fruto de uma velha e forte parceria entre nike e o jogador Michael Jordan</p>
                </div>
            </div>
        </header>
    )
}