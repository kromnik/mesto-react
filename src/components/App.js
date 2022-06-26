import { useState, useEffect} from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import EditAvatarPopup from './EditAvatarPopup';
import ImagePopup from "./ImagePopup";


function App() {
  const [isEditProfilePopupOpen, setIsEditProfileOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  
  const handleEditProfileClick = () => { setIsEditProfileOpen(true) };
  const handleAddPlaceClick = () => { setIsAddPlacePopupOpen(true) };
  const handleEditAvatarClick = () => { setIsEditAvatarPopupOpen(true) };
  const handleCardClick = (cardData) => { 
    setSelectedCard(cardData);
    setIsImagePopupOpen(true)
  };

  const closeAllPopups = () => {
    setIsEditProfileOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
    setIsImagePopupOpen(false);
  }

  return (
    <div className="page">
      <div className="page-container">
        <Header />
        <Main 
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        />
        <ImagePopup
          card={selectedCard}
          isOpen={isImagePopupOpen}
          onClose={closeAllPopups}
        />  
      </div>
    </div>
  );
}

export default App;
