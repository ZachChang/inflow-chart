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

  if (fromBox.top < toBox.top) {
    // if from point higher than to point
    const x0 = fromBox.left + fromBox.width * 0.5 - 35;
    const x1 = toBox.left + toBox.width * 0.5 - 35;
    const y0 = fromBox.top + fromBox.height - 16;
    const y1 = toBox.top - 16;

    return {x0, y0, x1, y1};
  }
  else if (fromBox.top > toBox.top) {
    // if from point lower than to point
    const x0 = fromBox.left + fromBox.width * 0.5 - 35;
    const x1 = toBox.left + toBox.width * 0.5 - 35;
    const y0 = fromBox.top - 16;
    const y1 = toBox.top + toBox.height - 16;

    return {x0, y0, x1, y1};
  }
  else {
    // frombox height = tobox height
    if (fromBox.left < toBox.left) {
      // frombox is left to toBox
      const x0 = fromBox.right - 50;
      const x1 = toBox.left - 35;
      const y0 = fromBox.top + fromBox.height * 0.5 - 16;
      const y1 = toBox.top + toBox.height * 0.5 - 16;

      return {x0, y0, x1, y1};
    } else {
      // frombox is right to toBox
      const x0 = fromBox.left - 35;
      const x1 = toBox.right - 50;
      const y0 = fromBox.top + fromBox.height * 0.5 - 16;
      const y1 = toBox.top + toBox.height * 0.5 - 16;

      return {x0, y0, x1, y1};
    }
  }
};
