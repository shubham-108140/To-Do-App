
const ToDOHero = ({todos_completed,total_todos} )=>{
    return(
        <section className="bg-[#468585]  font-bold text-2xl rounded-lg justify-center align-middle flex p-10">
            {/* <h1>ToDO  </h1> */}
            <p>Task Done</p>
            {/* <p>Keep It Up</p> */}
            <div className="ml-3">
                <p>{todos_completed}/{total_todos}</p>
            </div>
        </section>
    )
}

export default ToDOHero;