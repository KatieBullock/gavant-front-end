import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render, fillIn } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | customers", function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.setProperties({
      customers: [
        {
          firstName: "Donald",
          lastName: "Duck",
          emailAddress: "donaldduck@duckburg.com",
          phoneNumber: "(555) 366-2533",
          company: "McDuck Enterprises",
          project: "Duckburg Improvement",
          budget: 10,
        },
        {
          firstName: "Webby",
          lastName: "Vanderquack",
          emailAddress: "webbyv@duckburg.com",
          phoneNumber: "(555) 932-2987",
          company: "McDuck Enterprises",
          project: "Duckburg Security",
          budget: 12050,
        },
        {
          firstName: "Louie",
          lastName: "Duck",
          emailAddress: "louieduck@duckburg.com",
          phoneNumber: "(555) 568-4333",
          company: "Louie Inc.",
          project: "Getting Rich",
          budget: 777,
        },
      ],
    });
  });

  test("it renders a search bar", async function (assert) {
    await render(hbs`<Customers @model={{this.customers}} />`);

    assert.dom(".search").exists();
    assert.dom(".search input").exists();
  });

  test("it renders all customers by default", async function (assert) {
    await render(hbs`<CustomersTable @model={{this.customers}} />`);

    assert.dom("table tbody tr").exists({ count: 3 });
  });

  test("it updates the results according to the search query", async function (assert) {
    // Researching how to write tests that affect both components/mock tests
    await render(hbs`<Customers @model={{this.customers}}/>`);
    await render(hbs`<CustomersTable @model={{this.customers}} />`);

    assert.dom(".search").exists();
    assert.dom(".search input").exists();

    await fillIn("input", "Donald");

    assert.dom("table tbody tr").exists({ count: 1 });
    assert.dom("table tbody tr").containsText("Donald");

    await fillIn("input", "McDuck Enterprises");

    assert.dom("table tbody tr").exists({ count: 1 });
    assert.dom("table tbody tr").containsText("McDuck Enterprises");
  });
});
