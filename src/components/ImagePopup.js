function ImagePopup(props) {
  return (
    <div className={`popup popup_zoom-photo ${props.isOpen && "popup_opened"} popup_background-dark`}>
      <div className="popup__container-zoom-photo">
        <button
          className="popup__close-button popup__close-button_type_zoom"
          type="button"
          aria-label="Закрыть"
          onClick={props.onClose}
        ></button>
        <img className="popup__image-zoom" src={props.isOpen && props.card.link} alt={props.isOpen && props.card.name} />
        <h3 className="popup__image-zoom-description">{props.isOpen && props.card.name}</h3>
      </div>
    </div>
  );
}

export default ImagePopup;