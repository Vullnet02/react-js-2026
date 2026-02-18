import Logo from '../logo.svg';


function Home() {
  return (
    <div>
        <h1>Welcome to the Home Page</h1>
        <p>This is the home page of our React application.</p>
        <h4>Hello world</h4>
        <h5>Hello Kenza</h5>
        <img src={Logo} alt="" />
        
    </div>
  );
}

export default Home;