import Component from "@glimmer/component";

export default class CustomersFilterComponent extends Component {
  //To find results based on customers component model and if it includes the company, full name, and project value of the user searched query
  get results() {
    let { model, query } = this.args;

    if (query) {
      model = model.filter(
        (customer) =>
          customer.company.includes(query) ||
          customer.fullName.includes(query) ||
          customer.project.includes(query)
      );
    }

    return model;
  }
}
