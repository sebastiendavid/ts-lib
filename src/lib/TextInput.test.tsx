import * as React from 'react';
import { create } from 'react-test-renderer';
import TextInput from './TextInput';

describe('TextInput', () => {
  it('renders properly', () => {
    const tree = create(
      <TextInput label="Email" placeholder="name@example.com" />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
