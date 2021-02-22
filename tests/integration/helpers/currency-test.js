import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Helper | currency", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders a monetary value", async function (assert) {
    this.set("inputValue", "1234");

    await render(hbs`{{currency inputValue}}`);

    assert.equal(this.element.textContent.trim(), "$1,234");
  });
});
