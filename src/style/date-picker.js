const datePickerStyle = {

  // wrapper of entire component
  style: {
    borderRadius: 2,
    width: 267,
    fontSize: 14,
    textAlign: 'center',
    boxSizing: 'border-box',
    backgroundColor: 'white',

    /*
     To avoid any kind of flickering the user won't get feedback
     for selecting the button text
     */
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    MsUserSelect: 'none',
    userSelect: 'none',

    MsTouchAction: 'manipulation',
    touchAction: 'manipulation',

    /*
     Prevent flickering while tapping on WebKit
     http://stackoverflow.com/a/3516243/837709
     */
    WebkitTapHighlightColor: 'transparent',

    transition: 'color 0.1s',
    transitionTimingFunction: 'ease-out',
  },

  disabledStyle: {
    backgroundColor: '#D8D8D8',
  },

  readOnlyStyle: {
  },

  hoverStyle: {
  },

  focusStyle: {
    boxShadow: '0 0 0 2px rgba(140, 224, 255, 0.6) inset',
  },

  disabledHoverStyle: {
    backgroundColor: '#E1E9EC',
  },

  // nav-bar at top for month navigation
  navBarStyle: {
    height: 40,
    border: '1px solid #E0E0E0',
    paddingTop: 8,
    boxSizing: 'border-box',
  },

  // left button in nav-bar to go to previous month
  prevMonthNavStyle: {
    cursor: 'pointer',
    float: 'left',

    /*
     To avoid any kind of flickering the user won't get feedback
     for selecting the button text
     */
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    MsUserSelect: 'none',
    userSelect: 'none',

    /* This button can only be pressed */
    MsTouchAction: 'manipulation',
    touchAction: 'manipulation',

    /*
     Prevent flickering while tapping on WebKit
     http://stackoverflow.com/a/3516243/837709
     */
    WebkitTapHighlightColor: 'transparent',
  },

  hoverPrevMonthNavStyle: {
  },

  activePrevMonthNavStyle: {
  },

  // right button in nav-bar to go to previous month
  nextMonthNavStyle: {
    cursor: 'pointer',
    float: 'right',

    /*
     To avoid any kind of flickering the user won't get feedback
     for selecting the button text
     */
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    MsUserSelect: 'none',
    userSelect: 'none',

    /* This button can only be pressed */
    MsTouchAction: 'manipulation',
    touchAction: 'manipulation',

    /*
     Prevent flickering while tapping on WebKit
     http://stackoverflow.com/a/3516243/837709
     */
    WebkitTapHighlightColor: 'transparent',
  },

  hoverNextMonthNavStyle: {
  },

  activeNextMonthNavStyle: {
  },

  // styling for month label on top of calendar
  monthLabelStyle: {
    fontSize: 15,
    width: 125,
    boxSizing: 'border-box',

    /*
     User should be able to copy date.
     */
    WebkitUserSelect: 'initial',
    MozUserSelect: 'initial',
    MsUserSelect: 'initial',
    userSelect: 'initial',
  },

  // styling for entire grid of week-header and weeks
  weekGroupStyle: {
    boxSizing: 'border-box',
    overflow: 'auto',
    paddingBottom: 1,
  },

  weekHeaderStyle: {
    overflow: 'auto',
    boxSizing: 'border-box',
    boxShadow: '1px 0 0 0 #E0E0E0 inset, -1px 0 0 0 #E0E0E0 inset',
  },

  // styling for week's day label
  dayLabelStyle: {
    width: 39,
    height: 32,
    marginRight: -1,
    color: '#716D6D',
    display: 'block',
    float: 'left',
    boxSizing: 'border-box',
    paddingTop: 5,

    /*
     User should be able to copy date.
     */
    WebkitUserSelect: 'initial',
    MozUserSelect: 'initial',
    MsUserSelect: 'initial',
    userSelect: 'initial',
  },

  disabledDayLabelStyle: {
    color: '#C1BABA',
  },

  weekendLabelStyle: {
    backgroundColor: '#F0F0F0',
  },

  // styling for individual day
  dayStyle: {
    width: 39,
    height: 32,
    cursor: 'pointer',
    borderLeft: '1px solid #E0E0E0',
    borderRight: '1px solid #E0E0E0',
    borderTop: '1px solid #E0E0E0',
    borderBottom: '1px solid #E0E0E0',
    color: '#716D6D',
    float: 'left',
    marginRight: -1,
    marginBottom: -1,
    boxSizing: 'border-box',
    paddingTop: 5,
    position: 'relative',

    /*
     To avoid any kind of flickering the user won't get feedback
     for selecting the button text
     */
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    MsUserSelect: 'none',
    userSelect: 'none',

    /* This button can only be pressed */
    MsTouchAction: 'manipulation',
    touchAction: 'manipulation',

    /*
     Prevent flickering while tapping on WebKit
     http://stackoverflow.com/a/3516243/837709
     */
    WebkitTapHighlightColor: 'transparent',
  },

  readOnlyDayStyle: {
    cursor: 'auto',
  },

  hoverDayStyle: {
    background: '#EEE',
    color: '#616161',
  },

  activeDayStyle: {
    boxShadow: 'none',
    borderTop: '1px solid #BDBDBD',
    background: '#E0E0E0',
    color: '#424242',
  },

  focusDayStyle: {
    background: '#EEE',
    color: '#616161',
  },

  disabledDayStyle: {
    color: '#C1BABA',
    cursor: 'not-allowed',
  },

  disabledHoverDayStyle: {
    cursor: 'not-allowed',
    backgroundColor: 'red',
  },

  todayStyle: {
    color: '#2C87A9',
  },

  weekendStyle: {
    background: '#F0F0F0',
  },

  selectedDayStyle: {
    boxShadow: 'none',
    borderTop: '1px solid #BDBDBD',
    background: '#E0E0E0',
    color: '#424242',
  },

  otherMonthDayStyle: {
    color: '#BDBDBD',
  },
};

export default datePickerStyle;
