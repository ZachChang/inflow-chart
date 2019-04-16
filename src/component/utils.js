import React from 'react';


export const withStyles = styles => Component => class extends React.PureComponent {
  render() {
    return <Component {...this.props} classes={styles} />;
  }
};

export const calcWidth = width => `${parseInt(width || 2, 0) / 2}px`;

export const _detect = (from, to) => {
  const fromElement = document.getElementById(from);
  const toElement = document.getElementById(to);

  if (!fromElement || !toElement) {
    return false;
  }

  const fromBox = fromElement.getBoundingClientRect();
  const toBox = toElement.getBoundingClientRect();

  const x0 = fromBox.left + fromBox.width * 0.5;
  const y0 = fromBox.top + fromBox.height;
  const x1 = toBox.left + toBox.width * 0.5;
  const y1 = toBox.top + toBox.height;

  console.log({x0,y0,x1,y1});

  return {x0, y0, x1, y1};
};
