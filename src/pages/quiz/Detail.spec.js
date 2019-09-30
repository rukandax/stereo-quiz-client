import { shallowMount } from '@vue/test-utils';

import Detail from '@/pages/quiz/Detail.vue';

describe('Pages Quiz Detail', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallowMount(Detail);
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
