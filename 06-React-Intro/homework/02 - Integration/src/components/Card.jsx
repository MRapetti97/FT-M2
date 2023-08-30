export default function Card(props) {
   const {character, onClose} = props;

   return (
      <div>
         <button onClick={onClose}>X</button> 
         <h2>Name:{character.name}</h2>
         <h2>Especie:{character.species}</h2>
         <h2>Genre:{character.gender}</h2>
         
         <img src={character.image} alt={character.name}/>
      </div>
   );
}
