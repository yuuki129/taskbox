
import test from './test.vue';

export default {
  component: test,
  title: 'test',
};

const Template = args => ({
  components: { test },
  setup() {
    return {
      args,
    };
  },
  template: '<test v-bind="args" />',
});

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = { error: true };
