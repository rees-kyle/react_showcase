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
  EventHandling,
  TypingRefs,
  TypingContextAndCustomHooks,
  Summary
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
      <TypingRefs />
      <TypingContextAndCustomHooks />
      <Summary />
    </>
  );
};

export default BasicConceptsPage;