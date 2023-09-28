import './App.css';
import FormSingUp from './componentes/FormSingUp';
import Container  from '@mui/material/Container';
import Typography  from '@mui/material/Typography';
function App() {
  return (
    <Container component="section" maxWidth="sm">
      <Typography variant='h3' align='center' component= "h1">Formulario Registro</Typography>
      <FormSingUp/>
    </Container>
  );
}

export default App;
