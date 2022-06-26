function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }  
  
  return (
    <article className="card">
      <img 
        className="card__image" 
        src={props.card.link} 
        alt={props.card.name}
        onClick={handleClick}
        />
      <div className="card__description">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like-block">
          <button
            className="card__like-icon"
            type="button"
            aria-label="Лайкнуть"
          ></button>
          <span class="card__like-count">{props.card.likes.length}</span>
        </div>
      </div>
      <button
        className="card__btn-delete"
        type="button"
        aria-label="Удалить"
      ></button>
    </article>
  );
}

export default Card;
