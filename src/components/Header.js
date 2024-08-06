import QuizLogoImg from '../assets/quiz-logo.png';

export default function Header(){
    return (
       <header>
        <img src={QuizLogoImg} alt="Quiz clipboard with pens"/>
        <h1>General Trivia</h1>
       </header>
    );
}