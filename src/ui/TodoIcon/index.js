import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';
import { ReactComponent as EditSVG } from './edit.svg';
import './TodoIcon.css';

const iconTypes = {
  "check": (color,stroke) => <CheckSVG className="Icon-svg" fill={color} stroke={stroke} />,
  "delete": (color) => <DeleteSVG className="Icon-svg" fill={color} />,
  "edit": (color) => <EditSVG className="Icon-svg" fill={color} />,
};

function TodoIcon({ type, color, onClick, strokeColor }) {
  return (
    <span
      className={`Icon-container Icon-container-${type}`}
      onClick={onClick}
      style={{ color: strokeColor }} 
    >
      {iconTypes[type](color)}
    </span>
  )
}

export { TodoIcon };