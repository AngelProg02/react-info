//Juks utilidades para dotar más funcionalidad los componentes.
import { useState } from "react" 
//Cuando queremos que tenga un valor por defecto si no se le pasa, se le pone a la prop directamente lo que debe tener
export function TwitterFollowCard ({children,userName = 'uknown',initialIsFollowing}){
    //useStat devuelve un array de dos valores, el primero el que tendrá por defecto y el segudno cuando es falso, es decir, cuando cambia
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    // Ternaria, como if pero mas declarativo. Si following es true es 'Siguiendo' y sino es 'Seguir'
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
   
    const handleClick = () => {
        //Da la vuelta constantemente
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-follow-card'>
         <header>
             <img alt="Avatar" src="https://imgs.search.brave.com/MlvH95jnm3UPvFV8bMfoXCnBcc-RXF40OeK5FH0GnbM/rs:fit:474:292:1/g:ce/aHR0cHM6Ly9yZWRn/b2wuY2wvX19leHBv/cnQvMTY3Mzk4NDQ2/Nzg5NC9zaXRlcy9y/ZWRnb2wvaW1nLzIw/MjMvMDEvMTcvY2xh/dWRpby1icmF2by1i/ZXRpc19jcm9wMTY3/Mzk4NDMyMzUwMy5q/cGdfMjQyMzEwMTU1/LmpwZw"></img>
             <div>
                 <strong>{children}</strong>
                 <span>{userName}</span>
             </div>
         </header>
 
         <aside>
             <button onClick={handleClick}>
                {text}
             </button>
         </aside>
        </article>
     )
}