import React from "react";
import m from "./Main.module.css";
import img from "./Images/777.png";
import itemImg from "./Images/5.png";
import Post from "../Main/Posts/Post";

function Main() {
  return (
    <div className={m.mainAll}>
      <div className={m.Components}>
        <img className={m.Img} alt={"mainImage"} src={img} />
        <p className={m.smallText}>Полезный</p>
        <h1 className={m.MainText}>Смузи</h1>
        <p className={m.BannerLink}>Заказать</p>
        <div className={m.NewsName}>
          <img className={m.ImgIcon} alt={"itemImage"} src={itemImg} />
          Новости:
        </div>
        <div className={m.SomePost}>
          <Post message="01.06.2022: Акция! До конца июля на все смузи -30%" />
          <Post message="25.05.2022: Нас стало больше! Добро пожаловать в новый филиал по адресу:Киевская 1!" />
        </div>
      </div>
    </div>
  );
}

export default Main;
