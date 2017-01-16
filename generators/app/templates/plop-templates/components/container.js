import React from 'react';
import { connect } from 'react-redux';

// { someAction } from './actions';
import {{properCase componentName }} from './{{dashCase componentName}}';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  myPropMethod: (passedArgs) => {
    // call an imported action
  }
});

const {{properCase componentName}}Container = connect(
  mapStateToProps,
  mapDispatchToProps
)({{properCase componentName }});

export default {{properCase componentName }}Container;
