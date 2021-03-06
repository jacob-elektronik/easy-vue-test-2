import Vue from "vue";
import EasyVueTest, { element, getInnerHtml, getOuterHtml } from "../../src/main";

describe("HtmlFunction", () => {
  let easy: EasyVueTest;

  beforeEach(async () => {
    const component = Vue.component("TestComponent", {
      template: `
        <div>
          <div class="navigation">
            <p>foo</p>
          </div>
          <p id="the-message">bar</p>
          <p class="message">baz</p>
        </div>
      `,
    });

    easy = await EasyVueTest.mounted(component);
  });

  it("gets the inner HTML content correctly", () => {
    expect(easy
      .get(element(".navigation"))
      .do(getInnerHtml()),
    ).toEqual("<p>foo</p>");

    expect(easy
      .get(element("p#the-message"))
      .do(getInnerHtml()),
    ).toEqual("bar");
  });

  it("gets the outer HTML content correctly", () => {
    expect(easy
      .get(element(".navigation"))
      .do(getOuterHtml()),
    ).toEqual(`<div class="navigation"><p>foo</p></div>`);

    expect(easy
      .get(element("p#the-message"))
      .do(getOuterHtml()),
    ).toEqual(`<p id="the-message">bar</p>`);
  });
});
