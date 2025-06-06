import css from "./HomePage.module.css";
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <Container maxWidth="sm" sx={{ mt: 8, textAlign: 'center' }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ whiteSpace: 'nowrap' }}>
        Welcome to Contacts Book
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Log in to manage your contacts easily — add, edit, and keep everything organized in one place.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Button variant="contained" component={Link} to="/login">
          Log In
        </Button>
        <Button variant="outlined" component={Link} to="/register">
          Register
        </Button>
      </Box>
    </Container>
  );
}
