import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function CountryShow() {
    const { name } = useParams()
    const [country,setCountry] = useState()

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${name}`)
            .then(res => res.json()
            .then(item => {setCountry(item[0])
                console.log(item[0]);
                
            })
            )

            console.log(country);
            
    },[])


    return (
        <article className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50 p-">
			<img src={country?.flags?.svg} alt={country?.flags.alt} className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{country?.name.common}, {country?.capital}</h3>
				<span className="text-xs dark:text-gray-600">February 19, 2021</span>
				<p>{country?.flags.alt}</p>
			</div>
		</article>
    )
}

export default CountryShow
