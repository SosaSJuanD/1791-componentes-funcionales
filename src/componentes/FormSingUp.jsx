import Button from "@mui/material/Button"
import TextField  from "@mui/material/TextField"
import  Switch  from "@mui/material/Switch"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

function FormSingUp(){
    return <form>
        <TextField 
            id="name" 
            label="Nombre" 
            variant="outlined"
            fullWidth
            margin="normal"
        />
        <TextField 
            id="lastName" 
            label="Apellido" 
            variant="outlined"
            fullWidth
            margin="normal"
        /> 
        <TextField 
            id="email" 
            label="Correo electronico" 
            variant="outlined"
            fullWidth
            margin="normal"
        />  
        <FormGroup>
            <FormControlLabel
                control= {<Switch defaultChecked/>}
                label="Promociones"
            />
            <FormControlLabel
                control= {<Switch defaultChecked/>}
                label="Novedades"
            />
        </FormGroup>
        
        <Button variant="contained">Registrarse</Button>
    </form>
}

export default FormSingUp 