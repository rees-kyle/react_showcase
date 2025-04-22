import React from 'react';
import {
  BasicConcepts,
  Setup,
  TypingFunctionalComponents,
  WithReactFC,
  WithoutReactFC
} from '../../components/typescript/basic_concepts';

const BasicConceptsPage = () => {
  return (
    <>
      <BasicConcepts />
      <Setup />
      <TypingFunctionalComponents />
      <WithReactFC />
      <WithoutReactFC />
    </>
  );
};

export default BasicConceptsPage;