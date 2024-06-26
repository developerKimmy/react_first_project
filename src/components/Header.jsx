import reactImg from '../assets/react-core-concepts.png';

const reactDesctiptions = ['Fundamental', 'Crucial', 'Core'];

function genRendomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}
// function
export function Header() {
    const description = reactDesctiptions[genRendomInt(2)];
    return (
        <header>
            <img src={reactImg} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p> {description} React concepts you will need for almost any app you are going to build!</p>
        </header>
    );
}
