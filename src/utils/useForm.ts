export * from 'react-use-form-state';

export const PHONE_REGEX = /^1[3-9]\d{9}$/;
export const CODE_REGEX = /[0-9]{6}/;
export const PASSWORD_REGEX = /[0-9A-Za-z_]{6,}/;

export type IFormState = {
  pristine: any;
  errors: any;
  setField: (key: string, value: any) => void;
  values: {
    [key: string]: any;
  };
};

export function isPristine(formState: IFormState, filters: string[] = []): boolean {
  const { pristine, errors } = formState;
  return (
    !!Object.keys(pristine)
      .filter((v) => !filters.includes(v))
      .find((key) => !!pristine[key]) || !!Object.keys(errors).filter((v) => !filters.includes(v)).length
  );
}
