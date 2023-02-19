import React from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './AddUser.module.css';

const AddUser = (props) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={handleFormSubmit} className="addUser">
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age</label>
        <input id="age" type="text" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
