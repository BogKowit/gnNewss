import { FC, useEffect, useRef } from "react";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { closePopUps } from "../../../redux/uiReducer";
import { ReactNode } from "react";

interface Props {
  children: ReactNode | ReactNode[];
}

const BlurLock: FC<Props> = ({ children }) => {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  const dispatch = useDispatch();
  const ui = useSelector((state: RootState) => state.ui);
  const {  isOpenPopUp, isOpenPopUpAboutMe } = ui;

  useEffect(() => {
    if (ref.current) {
      if (isOpenPopUpAboutMe || isOpenPopUp) {
        disableBodyScroll(ref.current);
      } else {
        enableBodyScroll(ref.current);
      }
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [isOpenPopUpAboutMe , isOpenPopUp]);

  return (
    <>
      {isOpenPopUpAboutMe || isOpenPopUp ? (
        <div
          ref={ref}
          className="blurWrapper"
        >
          <div
            className="blurCloser"
            onClick={() => {
              dispatch(closePopUps());
            }}
          />
          <section
            className="blurSection"
          >
            {children}
          </section>
        </div>
      ) : null}
    </>
  );
};

export default BlurLock;
