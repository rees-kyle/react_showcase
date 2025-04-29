import React from 'react';
import Hello from './Hello';
import WithLogging from './WithLogging';

// Wrap Hello component with logging behavior
const HelloWithLogging = WithLogging(Hello);

export default HelloWithLogging;