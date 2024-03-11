import { useEffect, useRef, useState } from "react";

import styled from "styled-components";

import { DateRange } from "react-date-range";

import format from "date-fns/format";
import { addDays } from "date-fns";
import { ptBR } from "date-fns/locale";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./styles.css";

const InputsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 6px;
  border: 1px solid #cccccc;
  width: 90%;
  padding: 6px;
  margin: 0 auto;
  gap: 12px;
`;

const InputSubcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
`;

const InputTitle = styled.span`
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
`;

const Input = styled.input`
  font-size: 16px;
  color: #abaaaa;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 80px;
  border: none;
`;

const DateRangePicker = () => {
  // date state
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  // open close
  const [open, setOpen] = useState(true);

  // get the target element to toggle
  const refOne = useRef(null);

  return (
    <div className="calendarWrap">
      <div ref={refOne}>
        {open && (
          <DateRange
            locale={ptBR}
            onChange={(item) => setRange([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={1}
            direction="horizontal"
            className="calendarElement"
            rangeColors={["#F26938"]}
          />
        )}
      </div>

      <InputsContainer>
        <InputSubcontainer>
          <InputTitle>Check-in</InputTitle>
          <Input
            value={`${format(range[0].startDate, "dd/MM/yyyy")}`}
            readOnly
          />
        </InputSubcontainer>
        <InputSubcontainer>
          <InputTitle>Check-out</InputTitle>
          <Input value={`${format(range[0].endDate, "dd/MM/yyyy")}`} readOnly />
        </InputSubcontainer>
      </InputsContainer>
    </div>
  );
};

export default DateRangePicker;
