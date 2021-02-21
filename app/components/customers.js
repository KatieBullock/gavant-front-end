import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

export default class CustomersComponent extends Component {
  //What is being searched
  @tracked query = "";
}
