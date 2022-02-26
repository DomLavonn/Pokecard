import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import classes from "./PokemonForm.module.css"

const PokemonForm = () => {
    return <Form className={classes.form}>
        <div className={classes.flex}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className={classes.inputStyle}  type="text" placeholder="Enter Pokemon Name!" />
            </Form.Group>
            <Button variant="primary" size="sm" >Search</Button>

        </div>



    </Form>
}

export default PokemonForm