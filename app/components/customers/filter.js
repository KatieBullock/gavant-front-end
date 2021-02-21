import Component from "@glimmer/component";

export default class CustomersFilterComponent extends Component {
  //To find results based on customers component model and if it includes the company, full name, and project value of the user searched query
  get results() {
    let { model, query } = this.args;

    if (query) {
      let queryString = query.toLowerCase();
      model = model.filter(
        (customer) =>
          customer.company.toLowerCase().includes(queryString) ||
          customer.fullName.toLowerCase().includes(queryString) ||
          customer.project.toLowerCase().includes(queryString)
      );
    }

    return model;
  }
}
