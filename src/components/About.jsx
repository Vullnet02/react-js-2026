import Logo from '../assets/image.png';


function About() {
  return (
    <div>
        <h1 className='titulli'>Welcome to the About Components</h1>
      
        <img className='imazhi1'  src={Logo} alt="React Logo" />
        
    </div>
  );
}

export default About;