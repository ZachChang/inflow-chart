
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PageWrapper, EventWrapper, ComponentWrapper, Text, Node, Arrow } from './styles';
import * as d3 from 'd3';

class NodeContainer extends Component {
  componentDidMount() {
    this.svg = d3.select(this.refs.linecanvas)
      .append('svg')
      .attr('class', 'svg-container')
  }
  componentDidUpdate() {
    const pathSet = this.props.events.map( e => {
      return e.pathSet;
    });
    for (var i = 0; i < pathSet.length; i++) {
      for (var k = 0; k < pathSet[i].length; k++) {
        this._renderLine(pathSet[i][k]);
      }
    }
  }
  _renderLine(path) {
    const sl = this.props.scrollLeft;
    const st = this.props.scrollTop;

    console.log({path});
    var data = {
      source: {
        x: path.x0 + sl,
        y: path.y0 + st
      },
      target: {
        x: path.x1 + sl,
        y: path.y1 + st
      }
    };

    var link = path.y0 === path.y1 ? d3.linkHorizontal() : d3.linkVertical();
    // draw the curve link
    link.x(function(d) {
        return d.x;
      })
      .y(function(d) {
        return d.y;
      });

    this.svg.append("path")
        .attr("d", link(data))
        .attr('class', 'link-path')
  }
  render() {
    return (
      <React.Fragment>
        <Node styles={this.props.classes.lines} ref={this.props.item.id === 'a1' ? 'linecanvas' : null}>
          { this.props.direction && this.props.item.parent && <Arrow color={this.props.classes.lines.color} /> }
          {
          typeof this.props.render === 'function'
            ? React.cloneElement(
              this.props.render(this.props.item),
              {
                onClick: () => this.props.onClick(this.props.item),
                styles: this.props.classes.node,
              },
            )

            : (
              <React.Fragment>
                {(() => {
                  switch (this.props.item.type) {
                    case 'p':
                      return  <PageWrapper type={this.props.item.type} id={this.props.item.id} selected={this.props.selectedID} styles={this.props.classes.node} onClick={() => this.props.onClick(this.props.item)}>
                                <Text styles={this.props.classes.text}>{this.props.item.name}</Text>
                              </PageWrapper>;
                    case 'e':
                      return  <EventWrapper type={this.props.item.type} id={this.props.item.id} selected={this.props.selectedID} styles={this.props.classes.node} onClick={() => this.props.onClick(this.props.item)}>
                                <Text styles={this.props.classes.text}>{this.props.item.name}</Text>
                              </EventWrapper>;
                    case 'c':
                      return  <ComponentWrapper type={this.props.item.type} id={this.props.item.id} selected={this.props.selectedID} styles={this.props.classes.node} onClick={() => this.props.onClick(this.props.item)}>
                                <Text styles={this.props.classes.text}>{this.props.item.name}</Text>
                              </ComponentWrapper>;
                    default:
                      return  <PageWrapper type={this.props.item.type} id={this.props.item.id} selected={this.props.selectedID} styles={this.props.classes.node} onClick={() => this.props.onClick(this.props.item)}>
                                <Text styles={this.props.classes.text}>{this.props.item.name}</Text>
                              </PageWrapper>;
                  }
                })()}
              </React.Fragment>
            )
        }
          { this.props.children }
        </Node>
      </React.Fragment>
    );
  }
}

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
