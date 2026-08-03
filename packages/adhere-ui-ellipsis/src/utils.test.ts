import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import {
  getOptionsFunctionKey,
  getOptionsSignature,
  getTriggerDepKey,
  htmlToPlainText,
  mergeModifiersByName,
  normalizeTrigger,
  shouldEnableFocusTabIndex,
} from './utils.ts';

describe('normalizeTrigger / getTriggerDepKey', () => {
  it('falls back to default trigger', () => {
    assert.deepEqual(normalizeTrigger(undefined), ['hover', 'focus']);
    assert.deepEqual(normalizeTrigger([]), ['hover', 'focus']);
  });

  it('ignores trigger order in dep key', () => {
    assert.equal(getTriggerDepKey(['focus', 'hover']), getTriggerDepKey(['hover', 'focus']));
    assert.equal(getTriggerDepKey(['focus', 'hover']), 'focus|hover');
  });
});

describe('getOptionsSignature', () => {
  it('ignores function reference churn', () => {
    const left = {
      placement: 'top' as const,
      modifiers: [{ name: 'foo', fn: () => 1 }],
    };
    const right = {
      placement: 'top' as const,
      modifiers: [{ name: 'foo', fn: () => 2 }],
    };

    assert.equal(getOptionsSignature(left), getOptionsSignature(right));
  });

  it('detects serializable option changes', () => {
    assert.notEqual(
      getOptionsSignature({ placement: 'top' }),
      getOptionsSignature({ placement: 'bottom' }),
    );
  });
});

describe('getOptionsFunctionKey', () => {
  it('keeps the same key for the same function reference', () => {
    const fn = () => 1;
    const left = { modifiers: [{ name: 'foo', fn }] };
    const right = { modifiers: [{ name: 'foo', fn }] };

    assert.equal(getOptionsFunctionKey(left), getOptionsFunctionKey(right));
  });

  it('changes key when function reference changes', () => {
    const left = { modifiers: [{ name: 'foo', fn: () => 1 }] };
    const right = { modifiers: [{ name: 'foo', fn: () => 2 }] };

    assert.notEqual(getOptionsFunctionKey(left), getOptionsFunctionKey(right));
  });
});

describe('htmlToPlainText', () => {
  it('strips tags and decodes nested entities', () => {
    assert.equal(htmlToPlainText('<p>a&amp;lt;b</p>'), 'a<b');
    assert.equal(htmlToPlainText('hello<br/>world'), 'hello\nworld');
    assert.equal(htmlToPlainText('&#39;ok&#x21;'), "'ok!");
  });
});

describe('mergeModifiersByName', () => {
  it('keeps base modifiers and overrides by name', () => {
    const merged = mergeModifiersByName(
      [
        { name: 'offset', options: { offset: [0, 8] } },
        { name: 'eventListeners', enabled: true },
      ],
      [{ name: 'offset', options: { offset: [0, 12] } }],
    );

    assert.equal(merged.length, 2);
    assert.deepEqual(
      (merged.find((item) => item.name === 'offset') as { options?: { offset: number[] } })
        ?.options?.offset,
      [0, 12],
    );
    assert.equal(
      (merged.find((item) => item.name === 'eventListeners') as { enabled?: boolean })?.enabled,
      true,
    );
  });
});

describe('shouldEnableFocusTabIndex', () => {
  it('does not enable tabIndex for default trigger (implicit)', () => {
    assert.equal(shouldEnableFocusTabIndex(true, false, undefined), false);
  });

  it('enables tabIndex only when trigger is explicit and includes focus', () => {
    assert.equal(shouldEnableFocusTabIndex(true, true, 'focus'), true);
    assert.equal(shouldEnableFocusTabIndex(true, true, ['hover', 'focus']), true);
    assert.equal(shouldEnableFocusTabIndex(true, true, 'hover'), false);
    assert.equal(shouldEnableFocusTabIndex(false, true, 'focus'), false);
  });
});
