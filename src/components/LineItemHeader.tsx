import {
  LineItemInputs,
  LineItemProperties,
  TransactionInputType,
} from "../types";

interface LineItemHeaderProps {
  lineItemProperty: LineItemProperties;
}

function LineItemHeader({ lineItemProperty }: LineItemHeaderProps) {
  const { label, type }: TransactionInputType =
    LineItemInputs[lineItemProperty];
  return <div className="LineItemHeader">{`${label} `}</div>;
}

export default LineItemHeader;
