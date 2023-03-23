import { FC, useEffect, useRef } from "react";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import { UseUI } from "../../context/ContextUI";

interface Props {
  children: any;
}

const BlurLock: FC<Props> = ({ children }) => {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  const { isSidebarOpen, closeSidebar } = UseUI();

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

  return (
    <>
      {isSidebarOpen ? (
        <div
          ref={ref}
          className="fixed inset-0 z-50 overflow-hidden"
          onClick={closeSidebar}
        >
          <div className="absolute inset-0 flex justify-center overflow-hidden">
            <div className="absolute inset-0 bg-black bg-opacity-75 transition-opacity" />
            <div className="absolute inset-0 bg-black bg-opacity-75 transition-opacity" />

            <div className="flex items-center justify-center"></div>
            <section className="items-top absolute inset-y-0 mt-20 flex outline-none">
              <div className="">{children}</div>
            </section>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default BlurLock;
