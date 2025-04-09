import Leftcol from '../../elements/leftColumn/left.js';
import Midcol from '../../elements/midColumn/mid.js';
import Rightcol from '../../elements/rightColumn/right.js';
import './main.css';

function Main() {
  return (
    <div className="main">
      <Leftcol />
      <Midcol />
      <Rightcol />
    </div>
  );
}

export default Main;
