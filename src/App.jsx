import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
//Lista de usuarios que va a renderizar nuestra función
const users = [
    {
        userName: 'Jaime Altozano',
        name: "Pedro Parques",
        isFollowing:true
    },
    {
        userName: 'Pedro Alcaraz',
        name: "Peter Parker",
        isFollowing:false
    }
]
export function App() {
    return(
        <section> 
            {
                users.map(({userName, name,isFollowing}) => (
                        <TwitterFollowCard 
                        key={userName}
                        userName={userName} 
                        isFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                )
                )}
        </section>
    )
}



