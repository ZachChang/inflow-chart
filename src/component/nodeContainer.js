
import React, { Component } from 'react';
import { PageWrapper, EventWrapper, ComponentWrapper, LogicWrapper, Text, Node, Arrow } from './styles';
import { _detect } from './utils';
import * as d3 from 'd3';
import Fade from 'react-reveal/Fade';

class NodeContainer extends Component {
  componentDidMount() {
    if (this.props.item.id==='a1') {
      this.svg = d3.select(this.refs.linecanvas)
        .append('svg')
        .attr('class', 'svg-container');
    }
  }
  componentDidUpdate() {
    if (this.props.item.id==='a1') {

      // earse the old path
      this.svg.selectAll('path').remove();

      const events = this.props.events;
      const clickId = this.props.selected.id;
      const hoverId = this.props.hoverId;
      const pathSet = [];
      const highlighPathSet = [];


      for (let i = 0; i < events.length; i++) {
        console.log(events[i]);
        for (let k = 0; k < events[i].connects.length; k++) {
          var path = _detect(events[i].id, events[i].connects[k].id);
          if (events[i].id === clickId || events[i].id === hoverId) {
            // const id = events[i].id;
            highlighPathSet.push(path);
          } else {
            pathSet.push(path);
          }
        }
        for (let k = 0; k < events[i].logics.length; k++) {
          var path = _detect(events[i].id, events[i].logics[k].id);
          if (events[i].id === clickId || events[i].id === hoverId) {
            // const id = events[i].id;
            highlighPathSet.push(path);
          } else {
            pathSet.push(path);
          }
        }
      }

      for (let j = 0; j < pathSet.length; j++) {
          this._renderLine(pathSet[j], false);
      };
      for (let z = 0; z < highlighPathSet.length; z++) {
          this._renderLine(highlighPathSet[z], true);
      }
    }
  }
  _renderLine(path, highlight) {
    const sl = this.props.scrollLeft;
    const st = this.props.scrollTop;
    const pathClass = highlight ? 'highlight-path' : 'normal-path';
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
    // curve line api
    var link = path.y0 === path.y1 ? d3.linkHorizontal() : d3.linkVertical();
    link.x(function(d) {return d.x;}).y(function(d) {return d.y;});

    // Add new elements
    this.svg.append("path")
        .attr("d", link(data))
        .attr('class', pathClass)
  }
  render() {
    return (
      <React.Fragment>
        <Node disabledstyle={this.props.item.type==='l' ? false : this.props.item.disable} styles={this.props.classes.lines} ref={this.props.item.id === 'a1' ? 'linecanvas' : null}>
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
                      return  <PageWrapper disabledstyle={this.props.item.disable} type={this.props.item.type} id={this.props.item.id} selected={this.props.selected.id} styles={this.props.classes.node} onClick={() => this.props.onClick(this.props.item)} onMouseEnter={() => this.props.toggleHover(this.props.item)} onMouseLeave={() => this.props.toggleHover(this.props.item)}>
                                <Text styles={this.props.classes.text}>{this.props.item.name}</Text>
                              </PageWrapper>;
                    case 'e':
                      return  <EventWrapper disabledstyle={this.props.item.disable} type={this.props.item.type} id={this.props.item.id} selected={this.props.selected.id} styles={this.props.classes.node} onClick={() => this.props.onClick(this.props.item)} onMouseEnter={() => this.props.toggleHover(this.props.item)} onMouseLeave={() => this.props.toggleHover(this.props.item)}>
                                <Text styles={this.props.classes.text}>{this.props.item.name}</Text>
                              </EventWrapper>;
                    case 'c':
                      return  <ComponentWrapper disabledstyle={this.props.item.disable} type={this.props.item.type} id={this.props.item.id} selected={this.props.selected.id} styles={this.props.classes.node} onClick={() => this.props.onClick(this.props.item)} onMouseEnter={() => this.props.toggleHover(this.props.item)} onMouseLeave={() => this.props.toggleHover(this.props.item)}>
                                <Fade top opposite when={this.props.item.fadeOpen} duration={500}>
                                  <div>{this.props.item.log.slice(-1)[0]}</div>
                                </Fade>
                                <Text styles={this.props.classes.text}>{this.props.item.name}</Text>
                              </ComponentWrapper>;
                    case 'l':
                      return  <LogicWrapper disabledstyle={this.props.item.disable} type={this.props.item.type} id={this.props.item.id} selected={this.props.selected.id} styles={this.props.classes.node} onClick={() => this.props.onClick(this.props.item)} onMouseEnter={() => this.props.toggleHover(this.props.item)} onMouseLeave={() => this.props.toggleHover(this.props.item)}>
                                <Text styles={this.props.classes.text}>{this.props.item.name}</Text>
                              </LogicWrapper>;
                    default:
                      return  <PageWrapper disabledstyle={this.props.item.disable} type={this.props.item.type} id={this.props.item.id} selected={this.props.selected.id} styles={this.props.classes.node} onClick={() => this.props.onClick(this.props.item)} onMouseEnter={() => this.props.toggleHover(this.props.item)} onMouseLeave={() => this.props.toggleHover(this.props.item)}>
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

export default NodeContainer;
