import './GreetUser.css';
import { getWeekday } from 'root/src/utils/date';
import heart from 'assets/heart-svgrepo-com.svg';

interface GreetUserProps { user?: string }

export const GreetUser: React.FC<GreetUserProps> = ({ user }: GreetUserProps): JSX.Element => (
  <div className="greeting">
    <h1>
      Hello {user || 'World'}!<img src={heart} alt="Heart Icon" />
    </h1>
    <h4>
      Happy {getWeekday()}!
    </h4>
  </div>
  
);

export default GreetUser;