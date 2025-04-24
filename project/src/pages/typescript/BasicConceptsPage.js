import React from 'react';
import {
  BasicConcepts,
  Setup,
  TypingFunctionalComponents,
  WithReactFC,
  WithoutReactFC,
  TypingProps,
  UseStateWithTypes,
  TypingUseEffectDependencies
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
      <TypingUseEffectDependencies />
    </>
  );
};

export default BasicConceptsPage;