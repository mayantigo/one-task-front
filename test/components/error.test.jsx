import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Error from '../../src/components/error';

describe('Error test', () => {
  it('Contains html', () => {
    expect(shallow(<Error message="Test" />).contains('Test')).to.equal(true);
  });
});
