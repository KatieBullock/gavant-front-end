import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | dashboard-table", function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.set("model", []);
  });

  test("it renders a table", async function (assert) {
    await render(hbs`<DashboardTable @model={{this.model}} />`);

    assert.dom("table").exists();
  });
});
