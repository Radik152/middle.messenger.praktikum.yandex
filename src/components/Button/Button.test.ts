/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/quotes */
import { expect } from "chai";
import { describe, it } from "mocha";
import sinon from "sinon";

import { Button } from './Button.ts';

const testTitle = 'testButton';

describe('Button', async () => {
  it('should have text value after init', () => {
    const button = new Button({ titleButton: testTitle });

    expect(button.getContent()?.textContent).to.be.eq(testTitle);
  });

  it('should add events', () => {
    const fakeClickFunction = sinon.fake.returns(undefined);
    const button = new Button({ titleButton: testTitle, events: { click: fakeClickFunction } });

    button.getContent()?.click();

    expect(fakeClickFunction.calledOnce).to.eq(true);
  });

  it('should save events after updatings props', () => {
    const fakeClickFunction = sinon.fake.returns(undefined);
    const button = new Button({ titleButton: testTitle, events: { click: fakeClickFunction } });

    button.setProps({ titleButton: 'new Test text' });
    button.getContent()?.click();

    expect(fakeClickFunction.calledOnce).to.eq(true);
  });

  it('shoud add css classes', () => {
    const button = new Button({ titleButton: testTitle, className: 'classTest' });

    expect(button.getContent()?.getAttribute('class')).contains('classTest');
  });
});
