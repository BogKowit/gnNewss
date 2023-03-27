import { FC, useEffect, useRef } from "react";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { closeSidebar } from "../../../redux/uiReducer";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const BlurLock: FC<Props> = ({ children}) => {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  const dispatch = useDispatch();
  const ui = useSelector((state: RootState) => state.ui);
  const { isSidebarOpen } = ui;

  useEffect(() => {
    if (ref.current) {
      if (isSidebarOpen) {
        disableBodyScroll(ref.current);
      } else {
        enableBodyScroll(ref.current);
      }
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [isSidebarOpen]);

  const handleClose = () => {
    dispatch(closeSidebar());
  };
  return (
    <>
      {isSidebarOpen ? (
        <div
          ref={ref}
          className="  fixed inset-0 z-50 overflow-hidden cursor-pointer flex justify-center items-center"
        >
          <div
            className="absolute inset-0 h-screen w-screen bg-black bg-opacity-75 z-30 transition-opacity cursor-pointer"
            onClick={handleClose}
          />
          <section
            className=" absolute z-50 flex items-center justify-center
             outline-none  cursor-auto "
          >
            {children}
          </section>
        </div>
      ) : null}
    </>
  );
};

export default BlurLock;
