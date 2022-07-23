const move = ({card}) => {
    return (
        <div className='movie'>
    
        <img src={(card.Poster==="N/A" && 'https://via.placeholder.com/400') || card.Poster} alt={card.Title} title={card.Title}></img>
        <h4>{card.Title}</h4>
        </div>
     );
}
 
export default move;