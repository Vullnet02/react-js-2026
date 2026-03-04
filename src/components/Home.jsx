import Logo from '../assets/foto3.png';
import Foto from '../assets/foto2.png';


function Home() {
  return (
    <div className='div1' >
        <h1 className='titulli'>Welcome to the Home Components</h1>
        <img className='imazhi' src={Logo} alt="React Logo" />
                <img className='imazhiDyt' src={Foto} alt="React Logo" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente non perspiciatis voluptatibus maiores est hic!</p>
                  <h3>Subheading</h3>
    </div>
  );
}

export default Home;