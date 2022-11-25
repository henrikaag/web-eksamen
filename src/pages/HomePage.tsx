import Button from "react-bootstrap/esm/Button";
import NavLink from "react-bootstrap/esm/NavLink";

const HomePage = () => {

    return (
        <>
        <section className="container mt-5">
            <h1>Welcome to the ElectricGamesApi!</h1>
            <p>About the Api: This Web Api includes a database with information about available games and characters. 
                The database also provides information about the playable worlds in the different games, and equipment used by different characters. 
            </p>
            <p>
                This site makes it possible to interact with the database as you should be able to add and delete games, characters, worlds and equipment 
                to/from the database. It will also be possible to edit the different elements if there is any wrong information put in. 
            </p>
            <p>
                As a little fun extra element we added a simple minigame where your knowlegde about the different characters (already provided in the Api from the start)
                comes in handy... 
                <br/>
                Hint: You should have a look around the Api and read about the characters before playing the minigame
            </p>
            <hr/>
        </section>
        <section className='container'>
            <NavLink href="/minigame">
                <Button className='btn btn-success'>Play minigame</Button>
            </NavLink>
        </section>
        </>
    );
}

export default HomePage;