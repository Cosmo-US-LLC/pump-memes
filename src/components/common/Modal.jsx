import clsx from "clsx"

/**
 * @typedef {object} ModalProps
 * @property {boolean} props.open
 * @property {() => void} props.onClose
 * @property {string} props.title
 */

/**
 * @param {ModalProps} props
 * @returns 
 */
const Modal = ({ open, onClose, title, ...others }) => {
  return (
    <div className={clsx(
      "fixed flex items-center justify-center top-0 left-0 w-full h-full transition-opacity z-[1000]",
      {"opacity-0 pointer-events-none": !open}
    )}>
      <div onClick={onClose} className="absolute top-0 left-0 w-full h-full bg-[#000] bg-opacity-40" />
      <div
        className="flex flex-col gap-4 bg-[#fff] relative w-[calc(100%-2rem)] max-w-[25rem] max-h-[calc(100% - 2rem)] p-4"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
        }}
      >
        <button
          className="absolute top-2 right-2 w-7 h-7 p-1 bg-transparent rounded-full hover:bg-[rgba(0,0,0,0.1)] flex items-center justify-center transition-colors"
          onClick={onClose}
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        <h1 {...others} className={clsx("text-[32px] md:text-[28px] font-bold text-center", others.className)}>{title}</h1>
        {others.children}
      </div>
    </div>
  )
}

export default Modal