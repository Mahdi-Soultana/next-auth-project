import { createGlobalStyle } from "styled-components";
export const StyledGlobale = createGlobalStyle`
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
      `;
