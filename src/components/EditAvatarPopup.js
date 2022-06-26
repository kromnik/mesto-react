import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  return (
    <PopupWithForm
      name="update-avatar"
      title="Обновить аватар"
      buttonSubmitText="Сохранить"
      onClose={props.onClose}
      isOpen={props.isOpen}
    >
      <input
        id="avatarLink-input"
        className="popup__userinfo popup__userinfo_avatar_link"
        type="url"
        name="avatar"
        required
        placeholder="Ссылка на аватар"
        value=""
        autocomplete="off"
      />
      <span className="avatarLink-input-error popup__form-input-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
