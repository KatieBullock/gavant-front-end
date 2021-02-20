import Controller from "@ember/controller";
import { sort } from "@ember/object/computed";
import { tracked } from "@glimmer/tracking";

export default class DashboardController extends Controller {
  //To sort by budget descending
  @tracked sortProperty = "budget:desc";

  @sort("model", "customersSortProps")
  sortedCustomers;

  get customersSortProps() {
    return [this.sortProperty];
  }

  //To get total budget by adding the budget of every customer
  get totalBudget() {
    let totalBudget = 0;
    this.model.forEach((customer) => {
      totalBudget += customer.budget;
    });
    return totalBudget;
  }
}
