import Button from "react-bootstrap/esm/Button";
import NavLink from "react-bootstrap/esm/NavLink";

const HomePage = () => {

    return (
        <>
        <section className="container mt-5">
            <h1>Welcome to Electric Games</h1>
            <p>About the Api: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi aut consequuntur impedit nemo accusamus, itaque adipisci rem amet totam ut! Dolor sit amet consectetur adipisicing elit. Libero, aliquid!</p>
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