class Client {
  clientId: number;
  contactPersonName: string;
  companyName: string;
  address: string;
  city: string;
  pincode: string;
  state: string;
  employeeStrength: number;
  gstNo: string;
  contactNo: string;
  regNo: string;

  constructor(
    clientId: number,
    contactPersonName: string,
    companyName: string,
    address: string,
    city: string,
    pincode: string,
    state: string,
    employeeStrength: number,
    gstNo: string,
    contactNo: string,
    regNo: string
  ) {
    this.clientId = clientId;
    this.contactPersonName = contactPersonName;
    this.companyName = companyName;
    this.address = address;
    this.city = city;
    this.pincode = pincode;
    this.state = state;
    this.employeeStrength = employeeStrength;
    this.gstNo = gstNo;
    this.contactNo = contactNo;
    this.regNo = regNo;
  }
}
