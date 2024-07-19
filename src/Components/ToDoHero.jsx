
const ToDOHero = ({todos_completed,total_todos} )=>{
    return(
        <section>
            <p>Task Done</p>
            <p>Keep It Up</p>
            <div>
                <p>{todos_completed}/{total_todos}</p>
            </div>
        </section>
    )
}

export default ToDOHero;