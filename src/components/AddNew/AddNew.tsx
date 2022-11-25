import AddGame from "../Games/AddGame";
import AddCharacter from "../Characters/addCharacter";
import AddEquipment from "../Equipment/AddEquipment";
import AddWorld from "../Worlds/AddWorld";


const AddNew = () => {

    return (
        <>
        <main className="container">
            <h1>Add New</h1>
            <hr></hr>
            <section className="w-50">
                <h3>Add A Game</h3>
                <AddGame />
                <hr></hr>
                <br />
                <h3>Add A Character</h3>
                <AddCharacter />
                <hr></hr>
                <br />
                <h3>Add Equipment</h3>
                <AddEquipment/>
                <hr></hr>
                <br />
                <h3>Add World</h3>
                <AddWorld/>
            </section>
        </main>
        </>
    )
}

export default AddNew;