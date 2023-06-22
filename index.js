const sinon = require('sinon');
const { expect } = require('chai');

describe("index.js", () => {
  let input;

  beforeEach(function() {
    const document = window.document; 
    const button = document.createElement('button');
    button.id = 'button';
    document.body.appendChild(button);
    input = document.getElementById('button');
    sinon.spy(input, 'addEventListener');
  });

  it("binds an event listener in addingEventListener()", () => {
    
    addingEventListener();
    expect(input.addEventListener.called).to.be.true;
  });
});
