import { shallowMount } from '@vue/test-utils';

import QuizContent from '@/pages/quiz/components/QuizContent.vue';

describe('Component Quiz QuizContent', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallowMount(QuizContent);
  });

  afterEach(() => {
    wrapper = null;
  });

  it('Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Renders', () => {
    expect(wrapper).anything;
  });
});
