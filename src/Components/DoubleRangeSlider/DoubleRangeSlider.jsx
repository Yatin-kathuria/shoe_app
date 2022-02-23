import React from 'react';
import styles from './DoubleRangeSlider.module.css';

class DoubleRangeSlider extends React.Component {
  state = {
    currentMin: 200,
    inputMin: 100,

    currentMax: 1000,
    inputMax: 1500,
  };

  componentDidMount() {
    const { currentMin, currentMax, max } = this.state;
  }

  setMin = (e) => {
    const { min, max, currentMax, minValueBetween } = this.state;
    const inputMin = e.target.value;

    this.setState({
      inputMin,
    });

    if (inputMin >= min && inputMin <= currentMax - minValueBetween) {
      this.setState({
        currentMin: parseInt(inputMin),
      });
    }
  };

  changeMinValue = (e) => {
    e.preventDefault();

    document.addEventListener('mousemove', this.onMouseMoveMin);
    document.addEventListener('mouseup', this.onMouseUpMin);

    document.addEventListener('touchmove', this.onMouseMoveMin);
    document.addEventListener('touchend', this.onMouseUpMin);
  };

  onMouseMoveMin = (e) => {
    const {
      min,
      max,
      currentMax,
      minValueBetween,
      sliderWidth,
      offsetSliderWidht,
    } = this.state;

    const dragedWidht = e.clientX - offsetSliderWidht;
    const dragedWidhtInPercent = (dragedWidht * 100) / sliderWidth;
    const currentMin = Math.abs(parseInt((max * dragedWidhtInPercent) / 100));

    if (currentMin >= min && currentMin <= currentMax - minValueBetween) {
      this.setState({
        currentMin,
        inputMin: currentMin,
      });
    }
  };

  onMouseUpMin = () => {
    document.removeEventListener('mouseup', this.onMouseUpMin);
    document.removeEventListener('mousemove', this.onMouseMoveMin);

    document.removeEventListener('touchend', this.onMouseMoveMin);
    document.removeEventListener('touchmove', this.onMouseUpMin);
  };

  setMax = (e) => {
    const { min, max, currentMin, currentMax, minValueBetween } = this.state;

    const inputMax = e.target.value;

    this.setState({
      inputMax,
    });

    if (inputMax >= currentMin + minValueBetween && inputMax <= max) {
      this.setState({
        currentMax: parseInt(inputMax),
      });
    }
  };

  changeMaxValue = (e) => {
    e.preventDefault();

    document.addEventListener('mousemove', this.onMouseMoveMax);
    document.addEventListener('mouseup', this.onMouseUpMax);

    document.addEventListener('touchmove', this.onMouseMoveMax);
    document.addEventListener('touchend', this.onMouseUpMax);
  };

  onMouseMoveMax = (e) => {
    const { max, currentMin, minValueBetween, sliderWidth, offsetSliderWidht } =
      this.state;
    const maxWalueThumb = this.maxValue;
    const dragedWidht = e.clientX - offsetSliderWidht;
    const dragedWidhtInPercent = (dragedWidht * 100) / sliderWidth;
    const currentMax = Math.abs(parseInt((max * dragedWidhtInPercent) / 100));

    if (currentMax >= currentMin + minValueBetween && currentMax <= max) {
      maxWalueThumb.dataset.content = currentMax;
      this.setState({
        currentMax,
        inputMax: currentMax,
      });
    }
  };

  onMouseUpMax = () => {
    document.removeEventListener('mouseup', this.onMouseUp);
    document.removeEventListener('mousemove', this.onMouseMoveMax);

    document.removeEventListener('touchend', this.onMouseUp);
    document.removeEventListener('touchmove', this.onMouseMoveMax);
  };

  maxForMin = () => {
    const { currentMax, minValueBetween } = this.state;
    return currentMax - minValueBetween;
  };

  minForMax = () => {
    const { currentMin, minValueBetween } = this.state;
    return currentMin + minValueBetween;
  };

  render() {
    const {
      min,
      max,
      currentMin,
      inputMin,
      currentMax,
      inputMax,
      minValueBetween,
    } = this.state;

    return (
      <div className={styles.card}>
        <h2>Price Range</h2>
        <div className={styles.current_value}>
          <label htmlFor='min-input'>Min: </label>
          <input
            id='min-input'
            type='number'
            onChange={this.setMin}
            value={inputMin}
            min={min}
            max={this.maxForMin}
          />

          <br />
          <label htmlFor='max-input'>Max: </label>
          <input
            id='max-input'
            type='number'
            onChange={this.setMax}
            value={inputMax}
            min={this.minForMax}
            max={max}
          />
        </div>
      </div>
    );
  }
}

export default DoubleRangeSlider;
