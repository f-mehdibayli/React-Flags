import { useEffect, useState } from "react"
import Card from "./Card"
import Randomcard from "./RandomCard"
import { Pagination } from "antd"
import { scrollTopByElem } from "../../utility/scrollTop"

function Main() {
    const [data, setData] = useState([])
    const [count, setCount] = useState(12)
    const [randomInd, setRandomInd] = useState(0)

    const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all?fields=name,capital,flags,region,cca3')
            .then(res => res.json())
            .then(info => {
                setData(info)
                setRandomInd(rand(0, info.length))
                // console.log(Array.from(new Set(info.map(item => item.region))))
            })

    }, [])


    return (
        <main className=" dark:bg-gray-100 dark:text-gray-800">
            <section className="py-6 sm:py-12">

                <div className="container p-6 mx-auto space-y-8">
                    {
                        data.length == 0 &&
                        <div className="flex justify-center">
                            <span className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></span>
                        </div>
                    }
                    {
                        data.length > 0 && <Randomcard {...data[randomInd]} />
                    }
                    <div className="space-y-2 text-center mb-[5rem]">
                        <h2 className="text-3xl font-bold">Flags</h2>
                        <p className="font-serif text-sm dark:text-gray-600">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
                    </div>
                    <div id="content" className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                        {
                            data.slice(count - 12, count).map(item => <Card key={item.cca3} {...item} />)
                        }
                    </div>
                </div>
            </section>
            <Pagination
                align="center"
                pageSize={12}
                onChange={(page, pageSize) => {
                    setCount(page * pageSize)
                    scrollTopByElem('content')
                }}
                defaultCurrent={1}
                total={data.length} />
        </main>
    )
}

export default Main
