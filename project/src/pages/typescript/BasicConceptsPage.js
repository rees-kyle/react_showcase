import React from 'react';
import {
  BasicConcepts,
  Setup,
  TypingFunctionalComponents,
  WithReactFC,
  WithoutReactFC,
  TypingProps,
  UseStateWithTypes
} from '../../components/typescript/basic_concepts';

const BasicConceptsPage = () => {
  return (
    <>
      <BasicConcepts />
      <Setup />
      <TypingFunctionalComponents />
      <WithReactFC />
      <WithoutReactFC />
      <TypingProps />
      <UseStateWithTypes />
    </>
  );
};

export default BasicConceptsPage;