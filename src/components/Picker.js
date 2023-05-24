import Datepicker from "tailwind-datepicker-react";
import { useState } from "react";

const options = {
  title: "Filtre",
  autoHide: true,
  todayBtn: false,
  clearBtn: true,
  maxDate: new Date("2030-01-01"),
  minDate: new Date("1950-01-01"),
  theme: {
    background: "bg-slate-200",
    todayBtn: "",
    clearBtn: "",
    icons: "",
    text: "",
    disabledText: "bg-transparent",
    input:
      "bg-transparent border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:ring-0 focus:border-slate-300 block w-full rounded-md text-sm",
    inputIcon: "",
    selected: "",
  },
  icons: {
    // () => ReactElement | JSX.Element
    prev: () => <span>Prec</span>,
    next: () => <span>Suiv</span>,
  },
  datepickerClassNames: "top-10",
  language: "fr",
};

export default function Picker({ handleChange }) {
  const [show, setShow] = useState(false);

  const handleClose = (state) => {
    setShow(state);
  };

  return (
    <>
      <Datepicker
        options={options}
        onChange={handleChange}
        show={show}
        setShow={handleClose}
        classNames="relative"
      />
    </>
  );
}
