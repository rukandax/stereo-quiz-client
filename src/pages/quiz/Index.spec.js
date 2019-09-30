import { shallowMount } from '@vue/test-utils';

import Index from '@/pages/quiz/Index.vue';

describe('Pages Quiz Index', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallowMount(Index);
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
