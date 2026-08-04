import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import React from 'react';

import { flattenChildren } from './flattenChildren.ts';

describe('flattenChildren', () => {
  it('unwraps nested fragments and keeps meaningful text', () => {
    const children = [
      React.createElement('div', { key: 'a' }, 'A'),
      '\n  ',
      '和',
      React.createElement(
        React.Fragment,
        null,
        React.createElement('div', { key: 'b' }, 'B'),
        false,
        null,
        React.createElement('div', { key: 'c' }, 'C'),
      ),
    ];

    const flat = flattenChildren(children);

    assert.equal(flat.length, 4);
    assert.deepEqual(
      flat.map((item) => item.key),
      ['a', 'text-和', '2.b', '2.c'],
    );
  });

  it('keeps stable keys when keyed children reorder', () => {
    const first = flattenChildren([
      React.createElement('div', { key: 'a' }, 'A'),
      React.createElement('div', { key: 'b' }, 'B'),
    ]);
    const second = flattenChildren([
      React.createElement('div', { key: 'b' }, 'B'),
      React.createElement('div', { key: 'a' }, 'A'),
    ]);

    assert.deepEqual(
      first.map((item) => item.key),
      ['a', 'b'],
    );
    assert.deepEqual(
      second.map((item) => item.key),
      ['b', 'a'],
    );
  });

  it('disambiguates duplicate keys at the same level', () => {
    const flat = flattenChildren([
      React.createElement('div', { key: 'same' }, 'A'),
      React.createElement('div', { key: 'same' }, 'B'),
    ]);

    assert.deepEqual(
      flat.map((item) => item.key),
      ['same', 'same#1'],
    );
  });
});
