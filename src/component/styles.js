import styled, { css }  from 'styled-components';
import Button from '@material-ui/core/Button';
import { calcWidth } from './utils';

export const PageWrapper = styled(Button)`
  display: inline-block;
  z-index: 135;
  margin-top: 2px;
  padding: 10px 10px;
  background: #2fb5f361;
  color: white;
  font-size: 10px;
  border: 1px solid #2fb5f3;
  &:hover{
    cursor: pointer;
    background: #7fc1f1;
  }
  ${props => props.id === props.selected && css`
    background: #039be5;
    color: white;
    &:hover {
      background: #81d4fa;
    }
  `}
  ${props => props.disabledstyle === true && css`
    background: none;
    border: 1px dashed #696969;
    color: #696969;
    &:hover {
      background: none;
      border: 1px dashed #696969;
      color: #696969;
    }
  `}
`;

export const EventWrapper = styled(Button)`
  display: inline-block;
  z-index: 135;
  margin-top: 2px;
  padding: 10px 10px;
  background: #ffac3173;
  color: white;
  font-size: 10px;
  border: 1px solid #ffac31ed;
  &:hover{
    cursor: pointer;
    background: #ffac31e0;
  }
  ${props => props.id === props.selected && css`
    background: #ef6c00;
    color: white;
    &:hover {
      background: #e65100;
    }
  `}
  ${props => props.disabledstyle === true && css`
    background: none;
    border: 1px dashed #696969;
    color: #696969;
    &:hover {
      background: none;
      border: 1px dashed #696969;
      color: #696969;
    }
  `}
`;

export const ComponentWrapper = styled(Button)`
  display: inline-block;
  z-index: 135;
  margin-top: 2px;
  padding: 10px 10px;
  background: #74cc776e;
  color: white;
  font-size: 10px;
  border: 1px solid #74cc77f7;
  &:hover{
    cursor: pointer;
    background: #4cd851c7;
  }
  ${props => props.id === props.selected && css`
    background: #01b508;
    color: white;
    &:hover {
      background: #388e3c;
    }
  `}
  ${props => props.disabledstyle === true && css`
    background: none;
    border: 1px dashed #696969;
    color: #696969;
    &:hover {
      background: none;
      border: 1px dashed #696969;
      color: #696969;
    }
  `}
`;

export const LogicWrapper = styled(Button)`
  display: inline-block;
  z-index: 135;
  margin-top: 2px;
  padding: 10px 10px;
  background: none;
  border: 1px solid #f06292;
  background: #f062927a;
  color: white;
  font-size: 10px;
  &:hover{
    cursor: pointer;
    background: #f06292ad;
  }
  ${props => props.id === props.selected && css`
    background: #f06292ad;;
    color: white;
    &:hover {
      background: #f06292ad;
    }
  `}
  ${props => props.disabledstyle === true && css`
    background: none;
    border: 1px dashed #f06292;
    color: #f06292;
    &:hover {
      background: none;
      border: 1px dashed #f06292;
      color: #f06292;
    }
  `}
`;

export const Round = styled.div`
  position: absolute;
  width: 6px;
  height: 6px;
  border: 2px #149867;
  background-color: #fff;
  left: calc( 50% - 5px );
  top: -3px;
  border-radius: 3px;
`;
export const Node = styled.li`
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
    border-top: 1px solid ${props => (props.disabledstyle ? '#696969' : '#149867')};
    width: 50%;
    height: ${props => (props.styles ? props.styles.height : '40px')};
    z-index: 1;
  }
  ::after{
    left: calc( 50% - ${props => calcWidth(props.styles.width)});
    border-left: 1px solid ${props => (props.disabledstyle ? '#696969' : '#149867')};
    content: '';
    position: absolute;
    top: 0;
    //right: calc( 50% - ${props => calcWidth(props.styles.width)});
    border-top: 1px solid ${props => (props.disabledstyle ? '#696969' : '#149867')};
    width: 50%;
    height: ${props => (props.styles ? props.styles.height : '40px')};
    z-index: 1;
  }
  &:first-child::before{
    border: 0 none;
  }
  &:last-child::after{
  border : none
  }
&:last-child::before{
  border-right: 1px solid ${props => (props.disabledstyle ? '#696969' : '#149867')};
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
  border: solid '#149867';
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
  font-size: 12px;
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
    border-left: 1px solid ${props => (props.disabledstyle ? '#696969' : '#149867')};
    width: 0;
    height: ${props => props.styles.height || '40px'};
  }
`;
