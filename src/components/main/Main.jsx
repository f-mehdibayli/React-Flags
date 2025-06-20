import { useEffect, useState } from "react"
import Card from "./Card"
import Randomcard from "./Randomcard"

function Main() {
    const [data, setData] = useState([])
    const [count, setCount] = useState(12)

    const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all?fields=name,capital,flags,region,cca3')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    const randomIndex = rand(0, data.length)

    if( data.length == 0 ) return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>

    return (
        <main className=" dark:bg-gray-100 dark:text-gray-800">
            <section className="py-6 sm:py-12">
                <div className="container p-6 mx-auto space-y-8">
                    {
                        data.length > 0 && <Randomcard {...data[randomIndex]}/> 
                    }
                    <div className="space-y-2 text-center mb-[5rem]">
                        <h2 className="text-3xl font-bold">Flags</h2>
                        <p className="font-serif text-sm dark:text-gray-600">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                        {
                            data.slice(0, count).map(item => <Card key={item.cca3} {...item} />)
                        }
                    </div>
                </div>
            </section>
            <div className="text-center">
                <button
                    onClick={(() => setCount(count + 12))}
                    className="p-2 border cursor-pointer text-white border-black bg-blue-400 rounded-md">Elave et</button>
            </div>
        </main>
    )
}

export default Main
