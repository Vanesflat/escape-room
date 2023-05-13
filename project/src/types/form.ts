export type LoginFormFields = {
  email: string;
  password: string;
};

export type BookingFormFields = {
  name: string;
  tel: string;
  person: string;
};

export type FormField = {
  type: string;
  label: string;
  placeholder: string;
  pattern: RegExp;
  errorText: string;
};
