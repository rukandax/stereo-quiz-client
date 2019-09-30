import { shallowMount } from '@vue/test-utils';

import Index from '@/pages/login/Index.vue';

describe('Pages Login Index', () => {
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
