import React, { useMemo, useState } from "react";
import closeIcon from "../../images/close-icon.png";
import Image from "next/image";

const CustomModal = ({
  isBackground,
  modalTitle,
  children,
  isFooter,
  setShowModal,
  showModal,
  modalTitleStyle,
  modalCloseIcon,
}: any) => {
  const modalBg = useMemo(() => {
    if (isBackground) {
      return "border-0 px-6 py-3 rounded-lg relative flex flex-col w-full bg-white outline-none focus:outline-none";
    } else {
      return "border-0 px-6 py-3 rounded-lg relative flex flex-col w-full bg-trasperent outline-none focus:outline-none";
    }
  }, [isBackground]);
  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-auto max-w-3xl mx-auto my-6 max-lg:mx-2">
              <div className={modalBg}>
                <div className="flex items-start justify-between pt-5">
                  {modalTitle ? (
                    <h3
                      className={`${
                        modalTitleStyle
                          ? modalTitleStyle
                          : "text-base font-medium "
                      }`}
                    >
                      {modalTitle}
                    </h3>
                  ) : null}
                  <button
                    className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-white border-0 outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span
                      className={`block text-2xl text-white outline-none focus:outline-none ${
                        modalCloseIcon ? "-mt-4 w-4 h-4" : "w-6 h-6 "
                      }`}
                    >
                      <Image
                        className={`${modalCloseIcon ? "-mt-4 w-4" : ""}`}
                        src={modalCloseIcon ? modalCloseIcon : closeIcon}
                        alt=""
                      />
                    </span>
                  </button>
                </div>
                {/*body*/}
                {children ? children : null}
                {/*footer*/}
                {isFooter ? (
                  <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-slate-200">
                    <button
                      className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Save Changes
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
};

export default CustomModal;
