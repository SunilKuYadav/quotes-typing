import { getFormattedTime } from '../../utils';
import './styles.css';

interface HeaderProps {
  date: string;
  time: string;
  wish: string;
  name: string;
  timer: number;
}

const Header = (props: HeaderProps) => {
  const { date, time, wish, name, timer } = props;

  return (
    <header className="date-time-wrapper pop-in">
        <div className="left">
          <p className="wish gray">
            {wish}
            <span
              className="green pointer"
              onClick={() => console.log("clicked - handleInputFocus")}
            >
              {name}
            </span>
          </p>
          <p className="date-time gray">{date}</p>
        </div>
        <div className="app-name">Quotes-typing</div>
        <div className="left">
          <p className="timer gray"> Time: {time}</p>
          <p className="timer green">Timer: {getFormattedTime(timer)}</p>
        </div>
    </header>
  );
};

export { Header };
