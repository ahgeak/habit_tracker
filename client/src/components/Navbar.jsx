import { Nav, Container } from 'react-bootstrap'

function Nav() {
  const date = new Date()
  return (
    <Nav>
      <Container>
        <h3>Habits</h3>
        <span>{date.toDateString()}</span>
      </Container>
    </Nav>
    // <header>
    //   <h1>Habit Tracker</h1>
    // </header>
  );
}

export default Nav;
