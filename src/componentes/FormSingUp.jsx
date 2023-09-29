import { useState } from "react";
import Button from "@mui/material/Button"
import TextField  from "@mui/material/TextField"
import  Switch  from "@mui/material/Switch"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


function FormSingUp({handleSubmit}){
    const[name, setName] = useState("")
    const[lastName, setLastName] = useState("")
    const[email, setEmail] = useState("")
    const[prom, setProm] = useState(true)
    const[nov, setNov] = useState(false)
    
    const [errors, setErrors] = useState({
        name:{
            error: false,
            menssage: ""
        }
    })

    function validarNombre(nombre) {
        if(nombre.length>=3){
            return { name:{ error: false, menssage:""}}
        }else{
            return { name:{ error: true, menssage:"Debe ser de minimo 3 caracteres"}}
        }
    }

    return <form onSubmit={(e)=>{
        e.preventDefault()
        handleSubmit({
            name, lastName, email, prom, nov
        })
    }}>
        <TextField 
            id="name" 
            label="Nombre" 
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e)=>{
                    setName(e.target.value)
                }
            }
            error={errors.name.error}
            helperText={
                errors.name.error ? errors.name.menssage : ""
            }

            onBlur={(e)=> setErrors(validarNombre(e.target.value))}
        />

        <TextField 
            id="lastName" 
            label="Apellido" 
            variant="outlined"
            fullWidth
            margin="normal"
            value={lastName}
            onChange={(e)=> setLastName(e.target.value)}
        /> 
        <TextField 
            id="email" 
            label="Correo electronico" 
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
        />  
        <FormGroup>
            <FormControlLabel
                control= {<Switch
                    checked={prom}
                    onChange={(e)=> setProm(e.target.checked)}
                />}
                label="Promociones"
            />
            <FormControlLabel
                control= {<Switch
                    checked={nov}
                    onChange={(e)=> setNov(e.target.checked)}
                />}
                label="Novedades"
            />
        </FormGroup>
        
        <Button variant="contained" type="submit">Registrarse</Button>
    </form>
}

export default FormSingUp 