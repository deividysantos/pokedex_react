import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  --text           : ${({theme}) => theme.text};
  --bg-color       : ${({theme}) => theme.body};
  --bg-painel      : ${({theme}) => theme.painel};
  --bg-border      : ${({theme}) => theme.buttonBorder};
  --bg-button      : ${({theme}) => theme.button};
  --bg-buttonHover : ${({theme}) => theme.buttonHover};
}

body {   
  background-color: var(--bg-color);
}
`;