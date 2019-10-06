import { shallowMount } from '@vue/test-utils';

import QuizTimer from '@/pages/quiz/components/QuizTimer.vue';

describe('Component Quiz QuizTimer', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallowMount(QuizTimer);
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
