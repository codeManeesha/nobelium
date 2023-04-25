import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementButton } from './ButtonSlice';

const Button = ({ name }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(incrementButton({ buttonName: name }));
  };

  return (
    <button onClick={handleClick}>
      {name}
    </button>
  );
};

export default Button;
