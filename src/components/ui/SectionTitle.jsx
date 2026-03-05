function SectionTitle({title}){

return(

<div className="flex items-center gap-4 mb-6">

<h2 className="text-3xl font-bold dark:text-white">
{title}
</h2>

<div className="h-[2px] w-24 bg-orange-500"></div>

</div>

)

}

export default SectionTitle