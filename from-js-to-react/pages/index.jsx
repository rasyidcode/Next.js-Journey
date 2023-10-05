import { useState } from 'react'

function Header({ title }) {
    return <h1>{title}</h1>
}
export default function HomePage() {
    const [likes, setLikes] = useState(0)

    const dotaheroes = ['Anti-Mage', 'Axe', 'Meepo']

    function handleClick() {
        setLikes(likes + 1)
    }

    return (
        <div>
            <Header title="React 💙" />

            <ul>
                {dotaheroes.map((hero) => (
                    <li key={hero}>{hero}</li>
                ))}
            </ul>

            <button onClick={handleClick}>Like({likes})</button>
        </div>
    )
}