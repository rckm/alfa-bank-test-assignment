import { Input as InputStyle } from "./style";

export const Input = ({ onChange, name, value }) => {
  return (
    <InputStyle
      data-testid="input"
      name={name}
      value={value}
      onChange={onChange}
      placeholder="Enter github username"
    />
  );
};
