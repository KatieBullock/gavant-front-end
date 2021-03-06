import Model, { attr } from "@ember-data/model";
export default class CustomersModel extends Model {
  @attr("string") firstName;
  @attr("string") lastName;
  @attr("string") emailAddress;
  @attr("string") phoneNumber;
  @attr("string") company;
  @attr("string") project;
  @attr("number") budget;

  //To sort by last name and first name
  get sortedFullName() {
    return `${this.lastName}, ${this.firstName}`;
  }

  //To get full name
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
