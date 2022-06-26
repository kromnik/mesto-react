import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  return (
    <PopupWithForm
      name="add-card"
      title="Новое место"
      buttonSubmitText="Создать"
      onClose={props.onClose}
      isOpen={props.isOpen}
    >
      <input
        id="cardName-input"
        className="popup__userinfo popup__userinfo_card_name"
        type="text"
        name="name"
        required
        placeholder="Название"
        value=""
        minlength="2"
        maxlength="30"
        autocomplete="off"
      />
      <span className="cardName-input-error popup__form-input-error"></span>
      <input
        id="cardLink-input"
        className="popup__userinfo popup__userinfo_card_link"
        type="url"
        name="link"
        required
        placeholder="Ссылка на картинку"
        value=""
        autocomplete="off"
      />
      <span className="cardLink-input-error popup__form-input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;