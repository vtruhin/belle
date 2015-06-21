"use strict";

/* jslint browser: true */

import React, {Component} from 'react';
import {injectStyles, removeStyle} from '../utils/inject-style';
import {extend, omit, isUndefined, first, last} from "underscore";
import style from '../style/toggle';

function sanitizeChildProperties(properties) {
  let childProperties = omit(properties, [
    'type',
    'style',
    'onChange',
    'onFocus',
    'onBlur',
    'checked',
    'defaultChecked'
  ]);

  return childProperties;
}


/**
 * Toggle component
 */
export default class Toggle extends Component {

  constructor(properties) {
    super(properties);
    let checked = properties.defaultChecked ? properties.defaultChecked : false;
    checked = properties.checked ? properties.checked : checked;

    this.childProperties = sanitizeChildProperties(properties);

    this._mouseMoveEvent  = this._onMouseMove.bind(this);
    this._mouseUpEvent    = this._onMouseUp.bind(this);

    this.state = {
      value : checked
    };

    if(!isUndefined(this.props.children)){
      if(this.props.children.length !== 2){
        console.warn("You must have 2 choices for each toggle.");
      }
      if(first(this.props.children).props.value == last(this.props.children).props.value){
        console.warn("Your Choices must not have the same value.");
      }
    }
  }

  _onClick(event){
    const input = React.findDOMNode(this.refs.belleToggle);

    const clickEvent = new MouseEvent('click', event.nativeEvent);
    input.dispatchEvent(clickEvent);

    input.focus();
  }

  onFocus(){
    this.setState( { hasFocus : true } );
  }

  onBlur(){
    this.setState( { hasFocus : false } );
  }

  _onChange(event){
    if(isUndefined(this.props.checked)){
      this.setState( { value: event.target.checked } );
    }

    if (this.props.onChange) {
      this.props.onChange(event);
    }

  }
  // Just in case the mouse moves outside the Toggle component bind events to document instead of the Toggle itself
  _bindDocumentMouseEvents () {
    document.addEventListener('mousemove', this._mouseMoveEvent);
    document.addEventListener('mouseup', this._mouseUpEvent);
  }

  _unbindDocumentMouseEvents () {
    document.removeEventListener('mousemove', this._mouseMoveEvent);
    document.removeEventListener('mouseup', this._mouseUpEvent);
  }

  _onMouseDown(e){
    if (e.button !== 0) return;

    this._bindDocumentMouseEvents();
    this._dragStart = e.pageX - (this.state.value ? 0 : style.sliderOffset);

    this.setState({
      isDragging: true,
      hasFocus: true,
      sliderOffset: (this.state.value ? 0 : style.sliderOffset)
    });
  }

  _onMouseMove(e){
    if (!this.state.isDragging) return;

    let difference = e.pageX - this._dragStart;
    if (difference < -style.handle.width || difference > 0) return;

    this._dragEnd = difference;
    this.setState({
      sliderOffset: difference
    });
  }

  _onMouseUp(e){
    this._unbindDocumentMouseEvents();

    if(this._dragEnd){
      let state = this._dragEnd > -(style.handle.width / 2);

      this.setState({
        isDragging: false,
        value: state
      });

      this._dragEnd = false;
    } else {
      this.setState( { isDragging: false } );
    }

    this._dragStart = false;
  }

  _onMouseLeave(e){
    this._onMouseUp(e);
  }

  render() {

    const computedToggleStyle = extend( {}, style.toggle, (this.state.hasFocus ? style.toggleFocus : {}) );
    var computedSliderStyle;

    if(this.state.isDragging){
      computedSliderStyle = extend( {}, style.slider, { left: this.state.sliderOffset, transition: "none" } );
    }else{
      computedSliderStyle = extend( {}, style.slider, { left: this.state.value ? 0 : style.sliderOffset } );
    }

    const computedTrueChoice = first(this.props.children) ? first(this.props.children) : "✔";
    const computedFalseChoice = last(this.props.children) ? last(this.props.children) : "✘";

    const computedTrueChoiceStyle = extend( {}, style.check, (this.state.value ? {} : { opacity : 0 }) );
    const computedFalseChoiceStyle = extend( {}, style.cross, (this.state.value ? { opacity : 0 } : {}) );

    return (
      <div style={ computedToggleStyle }
           onMouseLeave={ this.state.isDragging ? this._onMouseLeave.bind(this) : null }>
        <div className="react-toggle-slider"
             ref="belleToggleSlider"
             style={ computedSliderStyle }>
          <div className="react-toggle-track-check"
               style={ computedTrueChoiceStyle }
               onClick={ this._onClick.bind(this) }>
            { computedTrueChoice }
          </div>
          <div className="react-toggle-handle"
               ref="belleToggleHandle"
               style={ style.handle }
               onMouseDown={ this._onMouseDown.bind(this)} />
          <div className="react-toggle-track-cross"
               style={ computedFalseChoiceStyle }
               onClick={ this._onClick.bind(this) }>
            { computedFalseChoice }
          </div>
        </div>
        <input
          ref="belleToggle"
          name={this.props.name}
          value={this.props.value}
          onFocus={this.onFocus.bind(this)}
          onBlur={this.onBlur.bind(this)}
          onChange={this._onChange.bind(this)}
          checked={this.state.value}
          style={ style.checkbox}
          type="checkbox"
          {...this.childProperties} />
      </div>
    );
  }
}

Toggle.displayName = 'Belle Toggle';
