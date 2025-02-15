const savingsSchema = {
  RRSP: null,
  Investment_Savings: null,
  Long_term_savings: null,
  Bonds: null,
  others: null,
};

const payment_ObligationsSchema = {
  credit_card: null,
  Loan: null,
  vehicle_lease: null,
  Line_of_credit: null,
};

const insuranceSchema = {
  life_insurance: null,
  health_insurance: null,
  others: null,
};

const housingSchema = {
  Rent: null,
  rent_insurance: null,
  storage_and_parking: null,
  utilities: null,
  maintenance: null,
};

const utilitiesSchema = {
  phone: null,
  Internet: null,
  water: null,
  Heat: null,
  Electricity: null,
  Cable: null,
  others: null,
};

const personalSchema = {
  transportation: null,
  clothing: null,
  gifts_family: null,
  personal_grooming: null,
  dining_out: null,
  Hobbies: null,
  others: null,
};

const expenseSchema = {
  Savings: savingsSchema,
  Payment_Obligations: payment_ObligationsSchema,
  Insurance: insuranceSchema,
  Housing: housingSchema,
  Utilities: utilitiesSchema,
  Personal: personalSchema,
};

module.exports = expenseSchema;