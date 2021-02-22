import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | page/nav", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {
    await render(hbs`{{page/nav}}`);

    assert.equal(
      this.element.textContent.trim().replace(/\s+/g, " "),
      "📈 GavantCRM Dashboard Customers"
    );
  });
});
