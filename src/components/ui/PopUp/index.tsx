import { FC, useEffect, useRef } from "react";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

interface Props {
  children: any;
  isOpen: boolean;
  onClose: () => void;
  autoClose?: any;
}

const BlurLock: FC<Props> = ({ children, isOpen, onClose, autoClose }) => {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    if (ref.current) {
      if (isOpen) {
        disableBodyScroll(ref.current);
      } else {
        enableBodyScroll(ref.current);
      }
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [isOpen]);


  return (
    <>
      {isOpen ? (
        <div ref={ref} className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 flex justify-center overflow-hidden">
            {autoClose ? (
              <div
                onClick={onClose}
                className="absolute inset-0 bg-black bg-opacity-75 transition-opacity"
              />
            ) : (
              <div className="absolute inset-0 bg-black bg-opacity-75 transition-opacity" />
            )}
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
