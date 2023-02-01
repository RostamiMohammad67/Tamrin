//npm i prop-type

import PropTypes from "prop-type";


 const User_info = (props) => {
  return (
    <div>
      this is user User_info
      <ul>
        <li>name is {props._name}</li>
        <li>last name is {props._last_name}</li>
        <li>age is {props._age}</li>
      </ul>
    </div>
  );
};

User_info.propTypes = {
  _name: PropTypes.string,
  _last_name: PropTypes.number,
  _age: PropTypes.int,
  
};
export default User_info;


