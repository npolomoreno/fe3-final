import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

const FavoriteCard = ({ name, username, id }) => {

  const { context, dispatch } = useContext(ContextGlobal)
  const { data, theme } = context

  const deleteFav = (nameDentist, userNameDentist, idDentist)=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    if (data.filter(dentist => dentist.id === idDentist).length > 0) {
      dispatch({ type: "FAVORITES", payload: data.filter(dentist => dentist.id !== idDentist)})
      return
    }

    const update = data.length === 0 ?  [{name: nameDentist, username: userNameDentist, id: idDentist}] : 
    [...data, {name: nameDentist, username: userNameDentist, id: idDentist}]
    dispatch({ type: "FAVORITES", payload: update})
  }

  return (
    <div className={theme === "light" ? "card" : "card-dark"}>
      <Link to={`detail/${id}`}>
        {/* En cada card deberan mostrar en name - username y el id */}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <img src='/images/doctor.jpg' alt={name} width='200px' display='flex' />
        <h5>{name}     </h5>
        <h6>{username} </h6>
      </Link>
      <button onClick={() => deleteFav(name, username, id)} className="favButton"> Delete from favorites</button>
    </div>
  );
};

export default FavoriteCard;