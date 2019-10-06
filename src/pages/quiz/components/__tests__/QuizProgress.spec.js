import { shallowMount } from '@vue/test-utils';

import QuizProgress from '@/pages/quiz/components/QuizProgress.vue';

describe('Component Quiz QuizProgress', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallowMount(QuizProgress);
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
