import AddGame from "../Games/AddGame";
import AddCharacter from "../Characters/addCharacter";


const AddNew = () => {

    return (
        <>
        <main className="container">
            <h1>Add New</h1>
            <hr></hr>
            <section className="w-50">
                <h3>Add A Game</h3>
                <AddGame />
                <br />
                <h3>Add A Character</h3>
                <AddCharacter />
            </section>
        </main>
        </>
    )
}

export default AddNew;