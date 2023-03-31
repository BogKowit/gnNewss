import { PopUpButtonClose } from "components";

const PopUp = () => (
  <article className="popUpWrapper">
    <>
      <h2>Co sprawiło mi trudność?</h2>
      <p>
        Od pewnego czasu korzystam wyłącznie z next.js, routy wyglądają nieco
        inaczej, koniec końców zrezygnowałem z konfiguracji path w tsconfig.
      </p>
      <h2>Co sprawiło mi największą przyjemność?</h2>
      <p>
        Nie korzystałem nigdy wcześniej z reduxtoolkid, który na pewno zastąpi
        mi klasyczną wersję, gdzie była ogromna ilość kodu w typescript.
      </p>
    </>
    <PopUpButtonClose />
  </article>
);

export default PopUp;
