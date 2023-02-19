export const globalStyle = `
#react-chrome-app-007 {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  height: 100vh;
  width: 400px; 
  position: fixed;
  z-index: 99999; 
  top: 0; 
  right: -400px;
  background-color: #fff; 
  overflow-x: hidden;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  transition: 1s ease;
}
#react-chrome-app-007.visible{
  right: 0;
}
div.menu{
  width: 100%;
  overflow-x: scroll;
  border-bottom:  #0000001f;
}
.menu::-webkit-scrollbar{
  display: none;
}
`;
