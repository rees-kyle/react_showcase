import React from 'react';
import {
  BasicConcepts,
  Setup,
  TypingFunctionalComponents,
  WithReactFC,
  WithoutReactFC,
  TypingProps
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
    </>
  );
};

export default BasicConceptsPage;