import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './AddUser.module.css';

const AddUser = (props) => {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(userName, userAge)
  };

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const userAgeChangeHandler = (event) => {
    setUserAge(event.target.value);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={handleFormSubmit} className="addUser">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={userName}
          onChange={userNameChangeHandler}
        />
        <label htmlFor="age" value={userAge}>
          Age
        </label>
        <input id="age" type="text" onChange={userAgeChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
