import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  name: {
    type: "String",
    required: "true",
  },
  email: {
    type: "String",
    required: "true",
  },
  role: {
    type: "String",
    required: "true",
  },
  age: {
    type: "Number",
    required: "true",
  },
  telephone: {
    type: "String",
    required: "true",
  },
  nic: {
    type: "String",
    required: "true",
  },
  image: {
    type: "String",
    required: "true",
  },
  attendance: {
    type: "boolean",
    required: "false",
    value: "false",
  },
});

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;
