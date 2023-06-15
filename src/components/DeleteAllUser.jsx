import React from 'react';
import styled from 'styled-components';
import { clearAllUser } from "../Store/Slices/UserSlice";
import { useDispatch } from 'react-redux';

const DeleteAllUser = () => {
  const dispatch = useDispatch();

  const clearAllUser = () => {
    dispatch(clearAllUser());
  }

  return <Wrapper>
    <button className='btn clear-btn'
    onClick={clearAllUser}
    > 
    clear users </button>
  </Wrapper>
}

const Wrapper = styled.section`
  .clear-btn{
    text-tranform: capitalize;
    background-color: #db338a;
  }
`
export default DeleteAllUser;
