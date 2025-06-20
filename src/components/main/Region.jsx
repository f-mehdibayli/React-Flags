import { useEffect, useState } from "react"
import Card from "./Card"
import { useParams } from "react-router-dom"

function Region() {

    const {reg} = useParams();
    const [data,setData] = useState([]) 

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/region/${reg}`)
            .then(res => res.json())
            .then(info => {setData(info)})
    },[reg])

    return (
        <main className="dark:bg-gray-100 dark:text-gray-800">
            <section className="py-6 sm:py-12">
                <div className="container p-6 mx-auto space-y-8">
                    <div className="space-y-2 text-center mb-[5rem]">
                        <h2 className="text-3xl font-bold">Afrika  ddddddddddddddddd</h2>
                        <p className="font-serif text-sm dark:text-gray-600">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                        {
                            data.length > 0 && data.map(item => <Card key={item.cca3} {...item} />)
                        }
                    </div>
                </div>
            </section>

        </main>
    )
}

export default Region
