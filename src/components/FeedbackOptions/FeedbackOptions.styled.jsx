import styled from 'styled-components';

export const ListBtn = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;
export const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: 30px;
  }
`;
export const Btn = styled.button`
  cursor: pointer;
  font-size: 14px;
  display: block;
  width: 100px;
  height: 40px;
  font-weight: bold;
  margin: 20px auto;
  text-align: center;
  padding: 1px 5px;
  border-radius: 10px;
  :hover {
    background: #f2ede6;
    color: #000;
  }
`;
