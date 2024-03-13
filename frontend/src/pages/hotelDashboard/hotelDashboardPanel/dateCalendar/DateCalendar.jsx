import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

import { useState } from "react";

import "react-day-picker/dist/style.css";
import { ptBR } from "date-fns/locale";

const css = `
.rdp-months {
  color: #0A846B
}

.rdp-caption_label {
  text-transform: uppercase;
}
`;

const DateCalendar = () => {
  const [selected, setSelected] = useState();

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }
  return (
    <>
      <style>{css}</style>
      <DayPicker
        showOutsideDays
        style={{
          backgroundColor: "white",
          padding: "14px",
          borderRadius: "10px",
        }}
        locale={ptBR}
        mode="single"
        selected={selected}
        onSelect={setSelected}
        // footer={footer}
      />
    </>
  );
};

export default DateCalendar;
