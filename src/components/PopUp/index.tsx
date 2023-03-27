import { useDispatch } from "react-redux";
import { closeSidebar } from "../../redux/uiReducer";



const PopUp = () => {
  const dispatch = useDispatch();

  return (
    <article
      className="bg-gray-100 text-xs sm:text-md md:text-lg  py-4 px-8 rounded-xl shadow-xl border border-black
       shadow-white text-black m-2 relative prose"
    >
      <>
        <h2>Co sprawiło mi trudność?</h2>
        <p className="">
          Wstyd się przyznać, ale do tej pory korzystałem z React-redux i
          contentu. Otypowanie dobrze wszystkiego w klasycznym react-redux,
          zajmowało bardzo dużo czasu. Cieszę się, że mogłem skorzystać z
          redux-toolkid.
        </p>
        <p>
          Od pewnego czasu korzystam wyłącznie z next.js, ostatnia wersja
          react-routera opierała się na wersji 4,x i +5. Dostrzegam dużo więcej
          możliwości, na które on teraz pozwala i nie do końca wiem, jak
          właściwie z niego korzystać.
        </p>
        <h2>Co sprawiło mi największą przyjemność</h2>
        <p>
          Nie korzystałem nigdy wcześniej z reduxtoolkid, który na pewno zastąpi
          mi klasyczną wersje.
        </p>
        <p>Bardzo lubię uczyć się nowych rzeczy związanych z programowaniem.</p>
      </>
      <button
        className="absolute right-4 top-4 md:right-8 md:top-8 text-white bg-red-400 p-2 rounded-md scale-x-150 font-semibold"
        onClick={() => {
          dispatch(closeSidebar());
        }}
      >
        X
      </button>
    </article>
  );
};

export default PopUp;
