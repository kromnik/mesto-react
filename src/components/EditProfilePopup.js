import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  return (
    <PopupWithForm
      name="update-avatar"
      title="Редактировать профиль"
      buttonSubmitText="Сохранить"
      onClose={props.onClose}
      isOpen={props.isOpen}
    >
      <input
        id="userName-input"
        className="popup__userinfo popup__userinfo_info_username"
        type="text"
        name="name"
        required
        placeholder="Ваше имя"
        value=""
        minlength="2"
        maxlength="40"
        autocomplete="off"
      />
      <span className="userName-input-error popup__form-input-error"></span>
      <input
        id="userNameInfo-input"
        className="popup__userinfo popup__userinfo_info_user-about"
        type="text"
        name="about"
        required
        placeholder="О себе"
        value=""
        minlength="2"
        maxlength="200"
        autocomplete="off"
      />
      <span className="userNameInfo-input-error popup__form-input-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;