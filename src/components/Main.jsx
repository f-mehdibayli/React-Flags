import { useEffect, useState } from "react"
import Card from "./Card"

function Main() {
    const [flags, setFlags] = useState([])

    useEffect(()=> {
        fetch('https://restcountries.com/v3.1/all?fields=name,capital,flags,region')
        .then(res => res.json())
        .then(data => setFlags(data))
    },[])


    return (
        <main>
            <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
                <div className="container p-6 mx-auto space-y-8">
                    <div className="space-y-2 text-center mb-[5rem]">
                        <h2 className="text-3xl font-bold">Flags</h2>
                        <p className="font-serif text-sm dark:text-gray-600">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                        {
                            flags.map((item,index)=> <Card key={index} {...item}/>)
                        }
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Main
