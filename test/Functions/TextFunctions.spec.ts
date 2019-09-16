import Vue from "vue";
import EasyVueTest, { dom, doms, getTextContent } from "../../src/main";

describe("TextFunctions", () => {
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
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
      `,
    });

    easy = await EasyVueTest.mounted(component);
  });

  it("gets the text content of an element correctly", () => {
    expect(easy
      .get(dom(".navigation p"))
      .do(getTextContent()),
    ).toEqual("foo");

    expect(easy
      .get(dom("p#the-message"))
      .do(getTextContent()),
    ).toEqual("bar");

    expect(easy
      .get(dom("p.message"))
      .do(getTextContent()),
    ).toEqual("baz");

    expect(easy
      .getAll(doms("ul li"))
      .map((e) => e.do(getTextContent())),
    ).toEqual(["1", "2", "3"]);
  });
});
