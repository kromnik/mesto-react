import { useEffect, useState } from "react";
import api from "../utils/api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getInitialData()
      .then((data) => {
        const [userInfoData, cardsData] = data;
        setUserName(userInfoData.name);
        setUserDescription(userInfoData.about);
        setUserAvatar(userInfoData.avatar);
        setCards(cardsData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-block">
          <img
            className="profile__avatar"
            src={userAvatar}
            alt="фото аватара"
          />
          <button
            className="profile__avatar-edit-button"
            type="button"
            onClick={props.onEditAvatar}
            aria-label="Изменить аватар"
          ></button>
        </div>
        <div className="profile__profile-info">
          <h1 className="profile__profile-info-username">{userName}</h1>
          <p className="profile__profile-info-user-about">{userDescription}</p>
          <button
            className="profile__edit-button"
            type="button"
            onClick={props.onEditProfile}
            aria-label="Редактировать"
          ></button>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={props.onAddPlace}
          aria-label="Добавить"
        ></button>
      </section>
      <section className="elements">
        {cards.map((card) => (
          <Card 
            key={card._id} 
            card={card}
            onCardClick={props.onCardClick}
           />
        ))}
      </section>
    </main>
  );
}

export default Main;
