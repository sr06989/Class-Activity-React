// import logo from './logo.svg';
import './css/App.css';

import React from "react";
import { users } from "./components/user";

//for picture display
const UserPicture = ({ user }) => {
  return <img src={user.profilePicture} alt="Profile" />;
};

//for user display
const User = ({user}) => {
  return (
    <div className={`class-level-${user.classLevel}`}>
      <UserPicture user={user} />
      <div>
        <ul>
          <div>
          <li><strong>Full name: </strong>{user.firstName} {user.lastName}</li>
          </div>
        </ul>

        <ul>
          <div>
          <li><strong>Class Level: </strong> <span style ={{ color: user.classLevel === "Freshmen" ? "green" : "black" }}>{user.classLevel}</span></li>
          </div>
        </ul>

        <ul>
          <div>
          <li><strong>School: </strong>{user.school}</li>
          </div>
        </ul>

        <ul>
          <div>
          <li><strong>Email: </strong>{user.email}</li>
          </div>
        </ul>
      </div>


    </div>
  );
};

const App = () => {
  return (
    <div>
      {users.map((user) =>(
      <User key= {user.username} user={user} />))}
    </div>
  );
};

export default App;



