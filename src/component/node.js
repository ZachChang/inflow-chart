
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PageWrapper, EventWrapper, ComponentWrapper, Text, Node, Arrow } from './styles';
import * as d3 from 'd3';
import ConnectModal from './connectModal';
import { _detect } from './utils';

class NodeContainer extends Component {
  constructor() {
    super();
    this.toggleComponent = this.toggleComponent.bind(this);
    this.state = {
      checkedComponent: [],
      pathSet: []
    };
  }
  componentDidMount() {
    // const w = document.getElementById('a1').clientWidth;
    // const h = document.getElementById('a1').clientHeight;

    this.svg = d3.select(this.refs.linecanvas)
      .append('svg')
      .attr('class', 'svg-container')
  }
  componentDidUpdate() {
    const pathSet = this.state.pathSet;
    for (var i = 0; i < pathSet.length; i++) {
      this._renderLine(pathSet[i]);
    }
  }
  _renderLine(path) {
    const sl = this.props.scrollLeft;
    const st = this.props.scrollTop;

    console.log({sl, st});
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
  toggleComponent(item) {
    const { checkedComponent } = this.state;
    const currentIndex = checkedComponent.indexOf(item.name);
    const newChecked = [...checkedComponent];

    if (currentIndex === -1) {
      newChecked.push(item.name);
      // get the position of this component in DOM
      const currentPathSet = this.state.pathSet;
      const newPath = _detect(this.props.clickNodeStatus.id, item.id);
      // console.log('this.state.clickNodeStatus.id', this.state.clickNodeStatus.id);
      // console.log('item.id', item.id);
      // console.log('newPath', newPath);
      this.setState({ pathSet: [ ...currentPathSet, newPath]})
    } else {
      newChecked.splice(currentIndex, 1);
    }
    this.setState({
      checkedComponent: newChecked,
    });
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
        <ConnectModal
          open={this.props.connectModalOpen}
          alert={this.props.components.length < 1}
          handleClose={this.props.closeConnectModal}
          components={this.props.components}
          checked={this.state.checkedComponent}
          toggleCheck={this.toggleComponent}
        />
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
