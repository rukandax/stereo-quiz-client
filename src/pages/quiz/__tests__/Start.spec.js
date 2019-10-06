import { shallowMount } from '@vue/test-utils';

import Start from '@/pages/quiz/Start.vue';

describe('Pages Quiz Start', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallowMount(Start);
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
