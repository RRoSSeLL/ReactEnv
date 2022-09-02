import "./GreetUser.css";
import heart from "assets/heart-svgrepo-com.svg";

interface GreetUserProps { user?: string };

export const GreetUser = ({ user }: GreetUserProps): JSX.Element => (
  <div className="greeting">
    <h1>
      Hello {user || "World"}!<img src={heart} alt="Heart Icon" />
    </h1>
  </div>
  
);

export default GreetUser;