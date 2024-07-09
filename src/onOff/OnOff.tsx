import React from "react";
import styled from 'styled-components';

export type OnOffType = {
    onOff: boolean
    // off: boolean
}
const CustomButtonOn = styled.div`
  background-color: #4CAF50;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  margin: 4px 2px;
  cursor: pointer;
`;
const CustomButtonOff = styled.div`
  background-color: coral;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  margin: 4px 2px;
  cursor: pointer;
`;
const CustomIndicator = styled.div`
  background-color: coral;
  color: white;
  border-radius: 50px;
  padding: 15px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  margin: 4px 2px;
  cursor: pointer;
`;
export function OnOff({onOff}: OnOffType) {
    const onClickOn = () => {

    }
    return (
        <div>

            <CustomButtonOn onClick={onClickOn}>On</CustomButtonOn>
            <CustomButtonOff>Off</CustomButtonOff>
            <CustomIndicator></CustomIndicator>
            <div>Off</div>
        </div>
    )
}