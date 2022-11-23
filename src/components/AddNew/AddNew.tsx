import AddGame from "../Games/AddGame";


const AddNew = () => {

    return (
        <>
        <main className="container">
            <h1>Add New</h1>
            <hr></hr>
            <section className="w-50">
                <h2>Add New Game</h2>
                <AddGame />
            </section>
        </main>
        </>
    )
}

export default AddNew;