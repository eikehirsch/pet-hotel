import { StyledButton } from "./styles.ts";

const Button = ({
  children,
  backgroundColor,
  color,
  border,
  borderRadius,
  fontWeight,
  padding,
  fontSize,
  width,
  margin,
  onClick,
}) => {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      color={color}
      border={border}
      borderRadius={borderRadius}
      fontWeight={fontWeight}
      padding={padding}
      fontSize={fontSize}
      width={width}
      margin={margin}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
