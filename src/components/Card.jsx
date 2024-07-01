export function Card({img, title, subTitle, value}){

    return (
        <div className="w-full h-72">
            <div className="bg-gray-300 h-48 flex justify-center items-center gap-2">
                <img 
                    src={img} 
                    alt="Tênis Nike"
                    className="flex justify-center items-center bg-cover w-56 h-32 transition-transform hover:scale-125"
                />
            </div>

            {/* conteúdo */}
            <div className="p-2">
                <p className="font-semibold text-sm">{title}</p>
                <p className="font-semibold text-xs text-[#7ca2f4]">{subTitle}</p>
                <p className="text-lg font-medium">{value}</p>
            </div>
        </div>
    )
}