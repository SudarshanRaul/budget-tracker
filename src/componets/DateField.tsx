import { useDispatch, useSelector } from "react-redux";
import { getTransaction } from "../reducer";
import { updateTxnInput } from "../types";


interface DateFieldProps {
  label: string;
  value?: string;
}

interface EventType {
  target : {
    value : string
  }
};

function DateField({ label, value }: DateFieldProps) {
  const dispatch = useDispatch();
  const {txnDate} = useSelector(getTransaction);
  function updateDate({ target: { value } } : EventType) {
    console.log(value);
    dispatch(updateTxnInput({txnDate: value}));
  }
  return (
    <div>
      <label>
        {label} <input type="date" value={txnDate} onChange={updateDate} />
      </label>
    </div>
  );
}

export default DateField;
