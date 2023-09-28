import Button from "@mui/material/Button"



function FormSingUp(){
    return <form>
        <label>Nombre</label>
        <input type="text"></input>
        <label>Apellido</label>
        <input type="text"></input>
        <label>Correo Electronico</label>
        <input type="text"></input>
        <label>Promociones</label>
        <input type="checkbox"></input>
        <label>Novedades</label>
        <input type="checkbox"></input>

        <Button variant="contained">Registrarse</Button>
    </form>
}

export default FormSingUp 