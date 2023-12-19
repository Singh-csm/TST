import Common from './Common';
import about from '../assets/About.svg'

const About = () => { 
    let t1 = "Know About us"
    let bre = "Welcome to Tech Sikho Together, where innovation meets functionality. your gateway to a world of tech knowledge and collaborative learning. We're here to fuel your passion for technology, providing a space where enthusiasts, learners, and experts come together to explore, discover, and grow. where your success is our code."

    return (
        <>
            <Common imgSrc={about} title1={t1} brief={bre}/>
        </>
    );
}

export default About;