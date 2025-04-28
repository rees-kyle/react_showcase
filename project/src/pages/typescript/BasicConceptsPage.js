import React from 'react';
import {
  BasicConcepts,
  Setup,
  TypingFunctionalComponents,
  WithReactFC,
  WithoutReactFC,
  TypingProps,
  UseStateWithTypes,
  TypingUseEffectDependencies,
  SimpleExample,
  ComplexExample,
  EventHandling
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
      <SimpleExample />
      <ComplexExample />
      <EventHandling />
    </>
  );
};

export default BasicConceptsPage;