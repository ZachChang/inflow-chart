import styled from 'styled-components';
import { calcWidth } from './utils';

export const Wrapper = styled.div`
  border: 1px solid red;
  background-color: purple;
  display: inline-block;
  z-index: 135;
  margin-top: 2px;
  padding: 10px 20px;
  color: white;
  border-radius: 8px;
  box-shadow: 0 2px 0 rgba(0,0,0,0.045);
  &:hover{
    cursor: pointer;
  }
  ${props => (props.styles ? { ...props.styles } : '')};
`;

export const Round = styled.div`
  border: 1px solid pink;
  position: absolute;
  width: 6px;
  height: 6px;
  border: 2px solid  ${props => props.color || 'pink'};
  background-color: #fff;
  left: calc( 50% - 5px );
  top: -3px;
  border-radius: 3px;
`;
export const Node = styled.li`
  border: 1px solid green;
  float: left;
  text-align: center;
  list-style-type: none;
  position: relative;
  padding: ${props => (props.styles ? props.styles.height : '40px')} 5px 0 5px ;
  ::before {
    content: '';
    position: absolute;
    top: 0;
    right:  calc( 50% - ${props => calcWidth(props.styles.width)});
    border-top: 4px solid pink;
    width: 50%;
    height: ${props => (props.styles ? props.styles.height : '40px')};
    z-index: -1;
  }
  ::after{
    left: calc( 50% - ${props => calcWidth(props.styles.width)});
    border-left: 5px solid red;
    content: '';
    position: absolute;
    top: 0;
    right: calc( 50% - ${props => calcWidth(props.styles.width)});
    border-top: 4px solid orange;
    width: 50%;
    height: ${props => (props.styles ? props.styles.height : '40px')};
    z-index: -1;
  }
  &:first-child::before{
    border: none;
  }
  &:last-child::after{
    border: none;
  }
&:last-child::before{
  border-right: 5px solid lime;
}
&:only-child{
  padding-top : 0px;
  margin: auto auto
}
&:only-child::before {
  border-right : none ;
  left : 0px;
  right : 0px ;
}
`;

export const Arrow = styled.span`
  border: solid  black ;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  left: calc( 50% - 4px );
  margin-top: -7px;
  position: absolute;

  transform: rotate(45deg);
`;

export const Text = styled.span`
  font-family: 'Open Sans', sans-serif;
  color: '#fff';
  font-size: 15px;
  ${props => (props.styles ? { ...props.styles } : '')};
`;


export const Root = styled.ul`
  &:not(:first-child){
    display: flex;
    position: relative ;
    padding:${props => props.styles.height} 0 0 0;
    margin: 0;
  }
  &:empty::before {
    border-left : none !important;
  }
  &:not(:first-child)::before{
    content: '';
    position: absolute;
    top: 0;
    left: calc( 50% - ${props => calcWidth(props.styles.width)});
    border-left: 5px solid blue;
    width: 0;
    height: ${props => props.styles.height || '40px'};
  }
`;
