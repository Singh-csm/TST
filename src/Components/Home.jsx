import Common from './Common';
import hero from '../assets/c1.svg'


const Home = () => { 
    return (
        <>
            <Common imgSrc={hero} title1={"Grow Your Skills"} subHeading={"Let the world know you by you!"} title2={"with"} title3={"Tech Sikho Together"}/>
        </>
    );
}

export default Home;