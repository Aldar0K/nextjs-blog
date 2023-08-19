import { format, parseISO } from "date-fns";

type DateProps = { dateString: string };

const DateComponent = ({ dateString }: DateProps) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
};

export default DateComponent;
