function Card({children}){

return(

<div
className="bg-white dark:bg-gray-800
p-6 rounded-xl shadow
hover:shadow-lg transition"
>

{children}

</div>

)

}

export default Card