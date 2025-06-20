function Randomcard({flags,name,capital,region}) {
  
  return (
    <article className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
			<img src={flags.svg} alt={flags.alt} className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{name.common}, {capital}</h3>
				<span className="text-xs dark:text-gray-600">February 19, 2021</span>
				<p>{flags.alt}</p>
			</div>
		</article>
  )
}

export default Randomcard
