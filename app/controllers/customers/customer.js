import Controller from "@ember/controller";
import { action } from "@ember/object";

export default class CustomersCustomerController extends Controller {
  @action
  async saveCustomer(event) {
    event.preventDefault();
    //To validate email and budget inputs
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        this.model.emailAddress
      ) &&
      /^[0-9]+$/.test(this.model.budget)
    ) {
      await this.model.save();
      this.transitionToRoute("customers.index");
    } else {
      alert("This field is invalid");
    }
  }
}
