// @flow
import React from 'react';

// React.addons.cloneWithProps look-alike that merges style & className.
export default function cloneElement(element: React.Element<any>, props: Object): React.Element<any> {
  if (props.style && element.props.style) {
    props.style = {...element.props.style, ...props.style};
  }
  if (props.className && element.props.className) {
    props.className = `${element.props.className} ${props.className}`;
  }
  // console.log(React.cloneElement(element, props))
  return React.cloneElement(element, props);
};
