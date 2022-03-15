import { Form, Button, FormGroup, FormControl, ControlLabel,  } from "react-bootstrap";
import classes from "./PokemonForm.module.css"
import {useState} from "react";

const PokemonForm = () => {
    // Setting Pokemon
    let [pokemon, setPokemon] = useState("")


    const getText = (event) => {
        setPokemon(event.target.value)



    }


    const getPokemon = (event) => {
     setPokemon("")
    }




    return <Form className={classes.form}  >
        <div className={classes.flex}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control value={pokemon} onChange={getText} className={classes.inputStyle}  type="text" placeholder="Enter Pokemon Name!" />
            </Form.Group>
            <Button onClick={getPokemon} variant="primary" size="sm" >Search</Button>
        </div>
    </Form>
}

export default PokemonForm