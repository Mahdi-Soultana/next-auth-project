import { createGlobalStyle } from "styled-components";
export const StyledGlobale = createGlobalStyle`
            :root {
  --toastify-color-light: #fff;
  --toastify-color-dark: #121212;
  --toastify-color-info: #3498db;
  --toastify-color-success: #07bc0c;
  --toastify-color-warning: #f1c40f;
  --toastify-color-error: #e74c3c;
  --toastify-color-transparent: rgba(255, 255, 255, 0.7);

  --toastify-icon-color-info: var(--toastify-color-info);
  --toastify-icon-color-success: var(--toastify-color-success);
  --toastify-icon-color-warning: var(--toastify-color-warning);
  --toastify-icon-color-error: var(--toastify-color-error);

  --toastify-toast-width: 320px;
  --toastify-toast-background: #fff;
  --toastify-toast-min-height: 64px;
  --toastify-toast-max-height: 800px;
  --toastify-font-family: sans-serif;
  --toastify-z-index: 9999;

  --toastify-text-color-light: #757575;
  --toastify-text-color-dark: #fff;

  //Used only for colored theme
  --toastify-text-color-info: #fff;
  --toastify-text-color-success: #fff;
  --toastify-text-color-warning: #fff;
  --toastify-text-color-error: #fff;

  --toastify-spinner-color: #616161;
  --toastify-spinner-color-empty-area: #e0e0e0;

  // Used when no type is provided
  // toast("**hello**")
  --toastify-color-progress-light: linear-gradient(
    to right,
    #4cd964,
    #5ac8fa,
    #007aff,
    #34aadc,
    #5856d6,
    #ff2d55
  );
  // Used when no type is provided
  --toastify-color-progress-dark: #bb86fc;
  --toastify-color-progress-info: var(--toastify-color-info);
  --toastify-color-progress-success: var(--toastify-color-success);
  --toastify-color-progress-warning: var(--toastify-color-warning);
  --toastify-color-progress-error: var(--toastify-color-error);
}


            *,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  font-size: 62.5%;
}


body {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  background-color: #efefef;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
img {
  width: 100%;
  height: 100%;
  display: inline-block;
  vertical-align: center;
  object-fit: cover;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
  color: inherit;
}
.container {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}
button,.btn {
  display: inline-block;
  padding: 1rem;
  margin: 0 1rem;
  font-size: 1.8rem;
  background: #ffffff;
  outline: none;
  text-align: center;
  border: white solid 3px;
  border-radius: 3em;
  width: 90px;
  color: #333;
  cursor: pointer;
  font-weight: 700;
  box-shadow:0 .5px 5px #33333392;
  &:hover {
    background: #002b47;
    color: #ffffff;
  }
  &:active {
    background: #ffffff;
    color: #002b47;
  }

}
a{
  display:inline-block;
  padding:0 1rem;
}
.about{

  font-size:1.7rem;
  font-style: italic;
  font-weight: bold;
  &:hover{
    color:#6bc4ff;
  }
}
.Toastify__toast-container--bottom-right {
font-size: 1.6rem;
text-transform: capitalize;
color: #030303;
button{
  box-shadow: none;
}
}
      `;
