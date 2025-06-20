function Card({flags,name,capital,region}) {   
        
    return (
        <article className="flex flex-col dark:bg-gray-50">
            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                <img alt={flags?.alt} className="object-cover w-full h-52 dark:bg-gray-500" src={flags?.svg} />
            </a>
            <div className="flex flex-col flex-1 p-6">
                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">{name?.common}</a>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{name?.official}</h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                    <span>{capital && capital[0]}</span>
                    <span>{region}</span>
                </div>
            </div>
        </article>
    )
}

export default Card
