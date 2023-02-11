import { useState } from "react";

interface DateFieldProps {
  label: string;
  value?: string;
}

function DateField({ label, value }: DateFieldProps) {
  const [date, setDate] = useState(value);
  function updateDate({ target: { value } }) {
    console.log(value);
    setDate(value);
  }
  return (
    <div>
      <label>
        {label} <input type="date" value={date} onChange={updateDate} />
      </label>
    </div>
  );
}

export default DateField;
