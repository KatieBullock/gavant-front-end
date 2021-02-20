import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import { empty } from "@ember/object/computed";
import { A } from "@ember/array";

export default class DashboardTableComponent extends Component {
  @service router;
  @empty("model") isEmpty;

  get model() {
    return this.args.model ? this.args.model : A();
  }

  //To get name, company, and budget for dashboard table
  get columns() {
    return [
      {
        name: "Name",
        valuePath: "fullName",
        isSortable: false,
      },
      {
        name: "Company",
        valuePath: "company",
        isSortable: false,
        breakpoints: ["desktop", "jumbo"],
      },
      {
        name: "Budget",
        valuePath: "budget",
        isSortable: false,
        breakpoints: ["jumbo"],
      },
    ];
  }
}
