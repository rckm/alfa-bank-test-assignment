import { Button as ButtonStyle } from "./style";

export const Button = ({ children, onClick }) => {
  return (
    <ButtonStyle data-testid="button" onClick={onClick}>
      {children}
    </ButtonStyle>
  );
};
