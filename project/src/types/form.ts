export type LoginFormFields = {
  email: string;
  password: string;
};

export type FormField = {
  label: string;
  placeholder: string;
  pattern: RegExp;
  errorText: string;
};
