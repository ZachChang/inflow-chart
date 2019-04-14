
import React from 'react';
import PropTypes from 'prop-types';
import {
  PageWrapper, EventWrapper, ComponentWrapper, Text, Node, Arrow,
} from './styles';

const NodeContainer = (props) => {
  const {
    item, classes, render, onClick, direction, children, selectedID
  } = props;
  return (
    <Node id={item.id} styles={classes.lines}>
      { direction && item.parent && <Arrow color={classes.lines.color} /> }
      {
      typeof render === 'function'
        ? React.cloneElement(
          render(item),
          {
            onClick: () => onClick(item),
            styles: classes.node,
          },
        )

        : (
          <React.Fragment>
            {(() => {
              switch (item.type) {
                case 'p':
                  return  <PageWrapper type={item.type} id={item.id} selected={selectedID} styles={classes.node} onClick={() => onClick(item)}>
                            <Text styles={classes.text}>{item.name}</Text>
                          </PageWrapper>;
                case 'e':
                  return  <EventWrapper type={item.type} id={item.id} selected={selectedID} styles={classes.node} onClick={() => onClick(item)}>
                            <Text styles={classes.text}>{item.name}</Text>
                          </EventWrapper>;
                case 'c':
                  return  <ComponentWrapper type={item.type} id={item.id} selected={selectedID} styles={classes.node} onClick={() => onClick(item)}>
                            <Text styles={classes.text}>{item.name}</Text>
                          </ComponentWrapper>;
                default:
                  return  <PageWrapper type={item.type} id={item.id} selected={selectedID} styles={classes.node} onClick={() => onClick(item)}>
                            <Text styles={classes.text}>{item.name}</Text>
                          </PageWrapper>;
              }
            })()}
          </React.Fragment>
        )
    }
      { children }
    </Node>

  );
};

NodeContainer.propTypes = {
  item: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  classes: PropTypes.objectOf(PropTypes.object),
  render: PropTypes.func,
  onClick: PropTypes.func,
  direction: PropTypes.bool,
  children: PropTypes.node,
  round: PropTypes.bool,
};

NodeContainer.defaultProps = {
  classes: {
    lines: {
      height: '60px',
      width: '2px',
    },
    node: {},
    text: {},
    arrow: {},
  },
  render: null,
  onClick: null,
  direction: false,
  children: null,
  round: false,
};

export default NodeContainer;
