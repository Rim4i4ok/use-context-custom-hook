import { FC } from "react";
import { useThemeContext } from "../../context/context.hook";

const Logo: FC = () => {
  const { theme, setTheme } = useThemeContext();
  return (
    <div
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      Logo - {theme}
    </div>
  );
};

export default Logo;
