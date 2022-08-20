import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
      <Navbar style={{backgroundColor: '#545454'}} variant="light" collapseOnSelect expand="md"> 
          <Container fluid="lg">
          
          <Navbar.Brand href='/'><span className={styles.title} >MIT | BWA</span></Navbar.Brand>
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            
            
            <Nav className="ml-auto">
         
              <Nav.Link href='/about'><span className={styles.MenuItem}>about</span></Nav.Link>
              <Nav.Link href='/exec'><span className={styles.MenuItem}>exec</span></Nav.Link>
              {/*<Nav.Link href='/gallery'><span className={styles.MenuItem}>gallery</span></Nav.Link>
              <Nav.Link href='/calendar'><span className={styles.MenuItem}>calendar</span></Nav.Link>*/}
            </Nav>
            
          </Navbar.Collapse>
          </Container>

    </Navbar>
  );
}

export default Navigation;