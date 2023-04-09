import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  /*===== GERAL ===============================================*/

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  font-family: "DM Sans", sans-serif;
}

:root {
  --hue: 90;
  --primary-color: #9182ff;
  --primary-hover: #9182ff;
  --secundary-color: hsl(0, 0%, 5%);
  --third-color: hsla(0, 0%, 100%, 0.1);
  --bg-color: hsl(0, 0%, 8%);
  --headline: hsl(0, 0%, 100%);
  --paragraph: hsla(0, 0%, 100%, 0.658);
  --paragraph-2: hsl(calc(var(--hue) + 10), 14%, 97%);

  font-size: 62.5%;

  --nav-height: 7.2rem;
}

html {
  scroll-behavior: smooth;
}

html,
body {
  width: 100%;
  height: 100%;
}

body {
  font-size: 1.6rem;
  text-align: center;

  overflow: overlay;

  background-color: var(--bg-color);
}

body.light-mode {
  --secundary-color: rgb(229, 229, 229);
  --third-color: hwb(0 48% 52% / 0.356);
  --bg-color: rgb(241, 241, 241);

  --headline: hsl(0, 0%, 0%);
  --paragraph: rgb(32, 32, 32);
  --paragraph-2: hsl(calc(var(--hue) + 10), 14%, 3%);
}

::-webkit-scrollbar {
  width: 0.8rem;
}

::-webkit-scrollbar-track {
  border-radius: 1rem;
  background: var(--bg-color);
}

::-webkit-scrollbar-thumb {
  border-radius: 1rem;
  background: var(--paragraph);
}

.wrapper {
  width: min(50rem, 100%);

  margin-inline: auto;
  padding-inline: 2.4rem;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
  color: var(--paragraph);
}

section {
  padding-block: 10rem;
  padding-inline: 2rem;
}

section h4 {
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.08rem;
  color: var(--primary-color);
  text-transform: uppercase;

  margin-bottom: 1.6rem;
}

section header h2 {
  font-size: 3rem;
  line-height: 3.9rem;

  color: var(--primary-color);
}

section h3 {
  color: var(--headline);
}

section p,
section span {
  font-weight: 400;
  font-size: 1.7rem;
  line-height: 130%;

  color: var(--paragraph);
}

.button {
  background: none;
  border: 0.2rem solid var(--primary-color);

  margin-bottom: 6rem;
  padding: 1.4rem 3rem;

  width: fit-content;

  color: var(--primary-color);
  font-size: 1.4rem;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  position: relative;

  transition: 400ms;
}

body.light-mode .button,
body.light-mode #home h4 {
  filter: brightness(0.8);
}

.button:hover {
  color: #fff;
  background-color: var(--primary-hover);
  border: 0.2rem solid var(--primary-hover);
  cursor: pointer;
}

body.light-mode .button:hover {
  filter: none;
}

/* SOCIAL LINKS */

.social-links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
}

.social-links li {
  height: 3rem;
}

.social-links svg {
  margin-top: 0.3rem;
  transition: 300ms;
}

.social-links li:nth-child(2) svg {
  width: 2.7rem;
  height: 2.7rem;
}

.social-links svg:hover {
  margin-top: 0;
  margin-bottom: 0.3rem;
}

body .social-links li svg path {
  transition: 200ms;
}

body nav#navigation

body nav#navigation .social-links li:nth-child(1) svg:hover path,
body .social-links li:nth-child(1) svg:hover path {
  stroke: #ff377a;
}

body .social-links li:nth-child(2) svg:hover path:nth-child(2),
body nav#navigation .social-links li:nth-child(2) svg:hover path:nth-child(2) {
  fill: #ffffff;
}

body.light-mode .social-links li:nth-child(2) svg:hover path:nth-child(2),
body.light-mode
  nav#navigation
  .social-links
  li:nth-child(2)
  svg:hover
  path:nth-child(2) {
  fill: #000;
}

body .social-links li:nth-child(3) svg:hover path:nth-child(2),
body nav#navigation .social-links li:nth-child(3) svg:hover path:nth-child(2) {
  fill: #0a66c2;
}

body .social-links li:nth-child(4) svg:hover path:nth-child(2),
body nav#navigation .social-links li:nth-child(4) svg:hover path:nth-child(2) {
  fill: #00abf0;
}

/* == == */

#experiences .card circle {
  fill: var(--secundary-color);
}

#backToTopButton circle {
  fill: var(--primary-color);
}

#contact li path,
#navigation button.open-menu path[stroke*="#00856F"] {
  stroke: var(--primary-color);
}

#navigation.scroll button.open-menu path[stroke*="#00856F"] {
  stroke: var(--paragraph-2);
}

/*===== NAVIGATION ===================================*/

nav {
  width: 100vw;
  height: var(--nav-height);

  display: flex;

  position: fixed;
  top: 0;
  z-index: 100;
}

nav .wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

nav.scroll {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(1rem);
  -webkit-backdrop-filter: blur(1rem);
}

body.light-mode nav.scroll {
  background: rgba(151, 151, 151, 0.5);
}

/* LOGO */

a.logo {
  font-family: "Gemunu Libre", sans-serif;
  font-size: 3rem;
  opacity: 0.7;
}

nav#navigation a.logo {
  color: var(--primary-color);
}

body.light-mode nav#navigation a.logo,
body.light-mode footer a.logo {
  font-weight: bold;
}

footer a.logo,
nav#navigation.scroll a.logo,
body.menu-expanded nav#navigation a.logo,
body.light-mode.menu-expanded nav#navigation.scroll a.logo {
  color: #fff;
}

body.menu-expanded nav#navigation a.logo {
  opacity: 1;
}

body.light-mode nav#navigation a.logo {
  filter: brightness(0.8);
}

body.light-mode footer a.logo,
body.light-mode nav#navigation.scroll a.logo {
  color: #000;
}

/* == == */

nav#navigation .menu ul li a {
  color: #fff;
}

nav button {
  background: none;
  border: none;
  cursor: pointer;
}

nav .menu,
nav .close-menu {
  position: fixed;
}

/*===== MENU-EXPANDED ==========================================*/

body.menu-expanded {
  overflow: hidden;
}

body.menu-expanded nav#navigation.scroll {
  background: none;
  backdrop-filter: none;
}

.menu,
.close-menu,
body.menu-expanded .open-menu {
  opacity: 0;
  visibility: hidden;
}

body.menu-expanded .menu,
body.menu-expanded .close-menu {
  opacity: 1;
  visibility: visible;
}

.menu {
  transform: translateX(100%);
}

body.menu-expanded .menu,
body.menu-expanded nav.scroll .menu {
  top: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(1rem);
  -webkit-backdrop-filter: blur(1rem);

  width: 100vw;
  height: 100vh;

  padding-top: var(--nav-height);

  transition: transform 300ms;
  transform: translateX(0);
}

.menu ul:nth-child(1) {
  display: flex;
  flex-direction: column;
  gap: 3rem;

  margin: 8rem 0 10rem 0;

  font-weight: 700;
  font-size: 2rem;
  line-height: 3.1rem;
}

body.menu-expanded nav .logo,
body.menu-expanded button {
  position: relative;
  z-index: 100;
}

body.menu-expanded button path {
  stroke: white;
}

/*===== HOME ===================================*/

#home {
  height: 100vh;
  min-height: calc(60rem + var(--nav-height));
  padding-block: 0;

  background-color: var(--secundary-color);

  display: flex;
  align-items: center;
}

#home .wrapper {
  height: 53rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6rem;

  position: relative;
}

#home h1 {
  font-size: 4.5rem;
  color: var(--headline);
  line-height: 110%;

  margin-bottom: 1rem;
}

#home p {
  display: inline-flex;

  font-size: 1.8rem;
  line-height: 150%;
  font-weight: bold;

  margin-bottom: 3.2rem;
}

#home .line {
  border-right: 0.2rem solid var(--primary-color);
  white-space: nowrap;
  overflow: hidden;
}

#home .typing {
  animation: line-typing 500ms steps(40) infinite normal,
    typing 2s steps(40) 1.4s normal backwards;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 27.5rem;
  }
}

@keyframes line-typing {
  from {
    border-right-color: var(--primary-color);
  }
  to {
    border-right-color: transparent;
  }
}

#home .button {
  margin-inline: auto;
}

#home .col-b {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  position: relative;
}

@keyframes flutuar {
  0% {
    transform: translateY(2rem);
  }
  50% {
    transform: translateY(-2rem);
  }
  100% {
    transform: translateY(2rem);
  }
}

#home .wrapper::before {
  content: "";
  display: block;

  width: 27rem;
  height: 27rem;

  background-color: var(--primary-color);
  border-radius: 100%;

  position: absolute;
  bottom: -3.1rem;
  z-index: -1;

  animation: appear 1s 500ms backwards;
}

#home img {
  width: 20rem;
  border-radius:50%;
  min-width: 14.5rem;
  display: block;
  margin-inline: auto;
  /* filter: contrast(1.2); */
}

@keyframes appear {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/*===== ABOUT =================================================*/

#about {
  text-align: left;
}

#about .content p {
  margin-block: 2.4rem;
}

#about .content a {
  text-decoration: none;
  color: var(--paragraph);
  font-weight: bold;
}

#about .col-a {
  margin-bottom: 6rem;
}

#about .col-b {
  text-align: left;
}

#about img.selfImage {
  width: 40rem;
  border-radius: 4rem;
  box-shadow: 0 0 2rem black;

  transition: 600ms;
}

/*===== EXPERIENCES ===============================================*/

#experiences {
  background-color: var(--secundary-color);
}

#experiences header {
  margin-bottom: 6rem;
}

#experiences header h2 {
  margin-bottom: 1.6rem;
}

#experiences header p {
  max-width: 60rem;
  margin: 0 auto 3rem;
  text-align: center;
}

#experiences header p a {
  color: var(--paragraph);
  font-weight: bold;
  font-style: italic;
}

#experiences header p + a {
  padding: 0.8rem 2rem;
  color: var(--paragraph);

  background-color: var(--third-color);
  border-radius: 0.8rem;

  display: inline-flex;
  justify-content: center;
  gap: 1rem;

  transition: 300ms;
}

#experiences header a svg path:nth-child(2) {
  fill: var(--headline);
}

#experiences header a:hover {
  filter: brightness(0.7);
}

#experiences .cards {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 3.2rem;
}

#experiences .card {
  padding: 4rem;
  background: var(--bg-color);

  border-radius: 0.6rem;
  box-shadow: -1rem 1rem 1rem rgba(0, 0, 0, 0.267);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;

  transition: 400ms;
}

#experiences .card:hover {
  background: var(--third-color);
}

#experiences .card .img-wrapper {
  width: 100%;
  position: relative;
}

#experiences .card img {
  width: 100%;
  height: 20rem;
  object-fit: cover;
  border-radius: 0.6rem;

  transition: 300ms;
}

#experiences .card:hover > .img-wrapper img {
  filter: opacity(0.5);
}

#experiences .card .buttons {
  visibility: hidden;
  opacity: 0;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  display: flex;
  justify-content: center;
  gap: 1rem;

  transition: 400ms;
}

#experiences .card:hover > .img-wrapper .buttons {
  visibility: visible;
  opacity: 1;
}

#experiences .card .buttons a svg {
  width: 4rem;
  height: 4rem;
}

#experiences .card .buttons a svg path:nth-child(2) {
  fill: #000;
  transition: 200ms;
}

#experiences .card .buttons a:hover svg path:nth-child(2) {
  fill: #fff;
}

#experiences .card .buttons a {
  background: #fff;
  border-radius: 50%;

  width: 6rem;
  height: 6rem;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 500ms;
}

#experiences .card .buttons a:hover {
  background-color: #000;
  cursor: pointer;
}

#experiences .card .buttons a:hover > svg {
  fill: #fff;
}

#experiences .card:nth-child(8) svg path:nth-child(2) {
  fill: var(--paragraph);
}

#experiences .button {
  margin: 6rem auto 0;
}

/*===== KNOWLEDGE ===============================================*/

#knowledge header h2 {
  margin-bottom: 6rem;
}

#knowledge .cards {
  display: flex;
  flex-direction: column;
  gap: 4.2rem;
}

#knowledge .card {
  padding: 0.8rem;
  text-align: center;
  background: var(--secundary-color);
  border-radius: 0.6rem;
  box-shadow: -1rem 1rem 1rem rgba(0, 0, 0, 0.267);
  transition: 400ms;
}

#knowledge .card:hover {
  background: var(--third-color);
}

#knowledge .card h3 {
  margin-block: 0.6rem;
}

#knowledge .card img {
  width: 10rem;
}

/*===== CONTACT ===============================================*/

#contact {
  text-align: left;
  background-color: var(--secundary-color);
}

#contact .col-a {
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 2rem;
}

#contact .col-a .content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#contact header {
  margin-bottom: 3.2rem;
}

#contact ul {
  margin-bottom: 2rem;
}

#contact ul a,
#about .content a:nth-child(2) {
  width: fit-content;

  text-decoration: none;

  display: flex;
  align-items: center;
  gap: 1rem;

  padding: 1rem;
  border-radius: 0.8rem;

  transition: 300ms;
}

#contact ul a {
  color: var(--paragraph);
}

#contact ul a:hover {
  background: var(--third-color);
}

#contact a path {
  transition: 400ms;
}

#contact a.button path {
  fill: var(--primary-color);
}

#contact a.button:hover path {
  fill: #fff;
}

#contact ul li:nth-child(2) a img {
  rotate: -15deg;
}

#contact ul li:nth-child(2) a path {
  stroke: none;
}

#contact .col-b {
  height: 38rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

#contact .col-b img {
  width: 13rem;
  animation: flutuar 2.5s infinite backwards;
  filter: brightness(1.2);
}

#contact .col-b::after {
  content: "";
  display: block;

  width: 13rem;
  height: 5rem;
}


/*===== FOOTER ===============================================*/

footer {
  background-color: var(--secundary-color);

  text-align: left;
  color: var(--paragraph);
}

footer .wrapper {
  padding-block: 6rem;
  border-top: 0.1rem solid var(--paragraph);
}

footer .logo {
  display: inline-block;
  margin-bottom: 2.4rem;
  opacity: 0.6;
}

footer a img:nth-child(2),
body.light-mode footer a img:nth-child(1) {
  display: none;
}

body.light-mode footer a img:nth-child(2) {
  display: initial;
}

footer p {
  line-height: 2;

  margin-bottom: 3.2rem;
}

footer .social-links {
  justify-content: flex-start;
}

footer .social-links li:nth-child(1) svg path {
  stroke: var(--paragraph-2);
}

footer .social-links li:nth-child(2) svg path:nth-child(2),
footer .social-links li:nth-child(3) svg path:nth-child(2),
footer .social-links li:nth-child(4) svg path:nth-child(2) {
  fill: var(--paragraph-2);
}

/*===== LANGUAGES =====================================*/



/*===== SWITCH MODE TOGGLE =====================================*/

#toggle {
  display: flex;

  position: fixed;
  bottom: 2rem;
  left: 2.5rem;
}

#toggle input {
  position: absolute;
  visibility: hidden;
}

#toggle label {
  width: 8rem;
  height: 4rem;

  background-color: var(--secundary-color);
  border: 0.1rem solid var(--primary-color);
  border-radius: 5rem;

  display: flex;
  align-items: center;
  justify-content: space-around;
}

#toggle label:hover {
  cursor: pointer;
}

#toggle label::before {
  content: "";
  display: block;

  width: 3rem;
  height: 3rem;

  background-color: var(--primary-color);
  border-radius: 50%;

  position: absolute;
  bottom: 0.5rem;
  left: 0.6rem;
  transform: translateX(0);

  transition: 500ms;
}

#toggle input:checked + label::before {
  transform: translateX(3.8rem);
}

/*===== BACK TO TOP BUTTON =====================================*/

#backToTopButton {
  position: fixed;
  bottom: 1.5rem;
  right: 2.5rem;

  opacity: 0;
  visibility: hidden;

  transition: 200ms;
  transform: translateY(100%);
}

#backToTopButton.show {
  opacity: 1;
  visibility: visible;

  transform: translateY(0);
}

/*===== RESPONSIVO (DESKTOP) ====================================*/

@media (max-width: 1023px){
  #home {
    padding-top:20rem;
  }
}

@media (min-width: 1024px) {
  /*===== GERAL =======================================*/

  body {
    overflow: auto;
  }

  .wrapper {
    width: min(112rem, 100%);
    display: grid;
  }

  section {
    padding-block: 13rem;
  }

  body section h2 {
    font-size: 4rem;
    line-height: 5.2rem;
  }

  .col-a {
    grid-area: A;
  }

  .col-b {
    grid-area: B;
  }

  /*===== NAVEGATION ==================================*/

  /*Reset*/
  nav#navigation .wrapper * {
    margin: 0;
    padding: 0;
    visibility: initial;
    display: initial;
    opacity: initial;
    flex-direction: initial;
    position: initial;
    font-size: initial;
    transform: initial;
    color: initial;
    background-color: initial;
    font-weight: initial;
    filter: initial;
  }

  nav#navigation a.logo,
  footer a.logo {
    font-size: 4rem;
    opacity: 0.7;
  }

  nav#navigation .close-menu,
  nav#navigation .open-menu {
    display: none;
  }

  nav#navigation .menu {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 70%;
  }

  nav#navigation .menu ul:nth-child(1) {
    display: flex;
    gap: 1rem;
  }

  nav#navigation .menu ul li a {
    color: var(--primary-color);
    opacity: 0.7;

    transition: opacity 0.4s;
  }

  body.light-mode nav#navigation .menu ul li a {
    opacity: 1;
  }

  nav#navigation.scroll .menu ul li a {
    color: var(--paragraph-2);
    opacity: 0.6;
  }

  nav#navigation .menu ul:nth-child(1) li {
    width: 8.4rem;
    color: var(--paragraph);
  }

  nav#navigation .menu ul:nth-child(1) li:nth-child(3),
  nav#navigation .menu ul:nth-child(1) li:nth-child(4) {
    width: 12rem;
  }

  nav#navigation .menu ul li a.active,
  nav#navigation .menu ul li a:hover {
    opacity: 1;
    font-weight: 700;
  }

  nav#navigation.scroll .menu ul li a.active,
  nav#navigation.scroll .menu ul li a:hover {
    opacity: 1;
  }

  nav#navigation .menu ul:nth-child(1) li a::after {
    content: "";
    width: 0%;
    height: 2px;
    background-color: var(--primary-color);

    display: block;

    position: relative;
    bottom: -2rem;
    left: -0.5rem;

    transition: width 0.2s;
  }

  nav#navigation.scroll .menu ul li a::after {
    background-color: var(--paragraph-2);
  }

  nav#navigation .menu ul li a:hover::after,
  nav#navigation .menu ul li a.active::after {
    padding-inline: 0.8rem;
    width: 100%;
  }

  nav#navigation.scroll .menu a.button:hover,
  nav#navigation.scroll .menu a.button.active {
    background-color: var(--primary-color);
    filter: brightness(1.3);
    border: none;
  }

  nav#navigation .social-links {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
  }

  nav#navigation .languages{
    stroke: var(--primary-color);
    color:var(--primary-color);
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
  }

  #navigation .languages > select{
    color:var(--primary-color);
    border-radius: 8%;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 100%;
    height: 40px;
    padding: 10px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
  }

  nav#navigation .languages > select:after {
    background-color: var(--secundary-color);
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    font-size: 24px;
    pointer-events: none;
  }

  nav#navigation .languages > select:focus + nav#navigation .languages > select:after {
    background-color: var(--secundary-color);  
  }

  nav#navigation .languages select option {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-color: var(--primary-color);
    color:  var(--secundary-color);;
  }
  
  nav#navigation .languages select option:hover {
    background-color: var(--primary-color);
    color:  var(--secundary-color);;
  }
  
  nav#navigation .languages select option:checked {
    background-color: var(--secundary-color);
    color: #fff;
  }

  nav#navigation .social-links li:nth-child(1) svg path {
    stroke: var(--primary-color);
  }

  nav#navigation .social-links li:nth-child(2) svg path:nth-child(2),
  nav#navigation .social-links li:nth-child(3) svg path:nth-child(2),
  nav#navigation .social-links li:nth-child(4) svg path:nth-child(2) {
    fill: var(--primary-color);
  }

  nav#navigation.scroll .social-links li:nth-child(1) svg path {
    stroke: var(--paragraph-2);
  }

  nav#navigation.scroll .social-links li:nth-child(2) svg path:nth-child(2),
  nav#navigation.scroll .social-links li:nth-child(3) svg path:nth-child(2),
  nav#navigation.scroll .social-links li:nth-child(4) svg path:nth-child(2) {
    fill: var(--paragraph-2);
  }

  nav#navigation .social-links svg {
    margin-top: 0.3rem;
    transition: 300ms;
  }

  nav#navigation .social-links svg:hover {
    margin-top: 0;
    margin-bottom: 0.3rem;
  }

  nav#navigation .social-links li svg path {
    transition: 200ms;
  }

  nav#navigation.scroll .social-links li:nth-child(1) svg:hover path {
    stroke: #ff377a;
  }

  nav#navigation.scroll
    .social-links
    li:nth-child(2)
    svg:hover
    path:nth-child(2) {
    fill: #fff;
  }

  nav#navigation.scroll
    .social-links
    li:nth-child(3)
    svg:hover
    path:nth-child(2) {
    fill: #0a66c2;
  }

  nav#navigation.scroll
    .social-links
    li:nth-child(4)
    svg:hover
    path:nth-child(2) {
    fill: #00abf0;
  }

  /*===== HOME ========================================*/

  #home {
    padding-top: var(--nav-height);
  }

  #home .wrapper {
    flex-direction: row;
    justify-content: space-between;

    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: "A B";
  }

  #home .col-a {
    text-align: left;
    align-self: center;
  }

  #home h1 {
    font-size: 6rem;
  }

  #home .content p {
    font-size: 2.5rem;
  }

  #home .button {
    margin: 0;
  }

  #home .wrapper.col-a {
    margin-top:30%;
  }

  #home .wrapper::before {
    width: 40rem;
    height: 40rem;

    right: 3rem;
    bottom: 7rem;
  }

  #home img {
    width: 42rem;
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 38rem;
    }
  }

  /*===== ABOUT =======================================*/

  #about .wrapper {
    grid-template-columns: 48rem 1fr;
    grid-template-areas: "B A";

    gap: 6.7rem;
  }

  #about .col-a {
    align-self: center;
  }

  #about .col-b {
    text-align: center;
  }

  #about img:hover {
    scale: 1.07;
  }

  #about .selfImage {
    border-radius: 4%
  }

  /*===== experiences ====================================*/

  #experiences {
    background-color: var(--secundary-color);
  }

  #experiences h2 {
    width: 49.7rem;
    margin-inline: auto;
  }

  #experiences .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem;
  }

  #experiences h3 {
    height: 2rem;
  }

  /*===== KNOWLEDGE =====================================*/

  #knowledge h2 {
    width: 49.7rem;
    margin-inline: auto;
  }

  #knowledge .cards {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 4rem;
  }

  #knowledge .card {
    width: 20%;
    flex-grow: 1;
  }

  /*===== CONTACT =====================================*/

  #contact .wrapper {
    grid-template-columns: 1fr 57.5rem;
    grid-template-areas: "A B";
  }

  #contact .col-a {
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-bottom: 0;
  }

  #contact .col-a .content {
    align-items: flex-start;
  }

  #contact .col-b {
    text-align: center;
  }

  /*===== FOOTER ======================================*/

  footer .wrapper {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "A B";
  }

  footer .col-a {
    align-self: center;
  }

  footer .col-b {
    align-self: center;
  }

  footer p {
    margin-bottom: 0;
  }

  footer .social-links {
    justify-content: flex-end;
  }
}

@media (max-width: 500px) {
  /*===== GERAL ==================================*/

  section h4 {
    font-size: 1.2rem;
  }

  body section h2 {
    font-size: 2.2rem;
  }

  section h3 {
    font-size: 1.4rem;
  }

  section p,
  section span,
  footer p {
    font-size: 1.3rem;
  }

  .button {
    padding: 1rem 2rem;
    font-size: 1.2rem;
  }

  /*===== NAVEGATION ==================================*/

  nav#navigation button svg {
    width: 3rem;
    height: 3rem;
  }

  nav {
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(1rem);
    -webkit-backdrop-filter: blur(1rem);
  }
  
  body.light-mode nav {
    background: rgba(151, 151, 151, 0.5);
  }

  /*===== MENU-EXPANDED ==================================*/

  body.menu-expanded .menu ul:nth-child(1) {
    font-size: 1.4rem;
    gap: 2rem;
    margin: 6rem 0 7rem;
  }

  body.menu-expanded .menu .social-links svg,
  footer svg {
    width: 2rem;
    height: 2rem;
  }

  body.menu-expanded .menu .social-links li:nth-child(2) svg,
  footer .social-links li:nth-child(2) svg {
    width: 2.3rem;
    height: 2.3rem;
  }

  /*===== HOME ==================================*/

  #home {
    padding-top:20rem;
  }

  #home h1 {
    font-size: 3.8rem;
  }

  #home p {
    font-size: 1.6rem;
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 23.5rem;
    }
  }

  #home .wrapper::before {
    bottom: -2rem;
  }

  /*===== ABOUT ==================================*/

  #about .content a:nth-child(2) {
    font-size: 1.4rem;
  }

  /*===== experiences ==================================*/

  #experiences .card {
    padding: 2.5rem;
  }

  #experiences .card img {
    height: 15rem;
  }

  #experiences .card .buttons a {
    width: 5rem;
    height: 5rem;
  }

  #experiences .card .buttons a svg {
    width: 3rem;
    height: 3rem;
  }

  /*===== CONTACT ==================================*/

  #contact ul a {
    font-size: 1.3rem;
  }

  #contact .col-b img {
    width: 10rem;
  }

  #contact .col-b::after {
    width: 10rem;
    height: 3rem;
  }
}

@media (max-width: 410px) {
  #home .wrapper::before {
    width: 24rem;
    height: 24rem;

    bottom: -0.5rem;
  }
}

@media (max-width: 320px) {
  /*===== GERAL ==================================*/

  .wrapper {
    padding-inline: 2rem;
  }

  /*===== HOME ==================================*/

  #home .wrapper::before {
    width: 20rem;
    height: 20rem;

    bottom: 2rem;
  }

  #home h1 {
    font-size: 3.2rem;
  }

  #home p {
    font-size: 1.4rem;
  }

  #home .line {
    white-space: initial;
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 18rem;
    }
  }

  /*===== ABOUT ==================================*/

  #about .content a:nth-child(2) {
    font-size: 1.2rem;
  }
}

@media (max-width: 250px) {
  /*===== GERAL ==================================*/

  .wrapper {
    padding-inline: 1rem;
  }

  body section h2 {
    font-size: 2rem;
  }

  section h3 {
    font-size: 1.2rem;
  }

  section p,
  section span,
  footer p {
    font-size: 1.1rem;
  }

  .button {
    padding: 0.8rem 1.6rem;
    font-size: 1rem;
    gap: 0.6rem;
  }

  .social-links {
    gap: 1.5rem;
  }

  nav#navigation a.logo,
  footer a.logo {
    font-size: 2.5rem;
  }

  /*===== HOME ==================================*/

  #home h1 {
    font-size: 2.9rem;
  }

  #home p {
    font-size: 1.2rem;
  }

  #home .wrapper::before {
    width: 15rem;
    height: 15rem;

    bottom: 3.5rem;
  }

  /*===== experiences ==================================*/

  #experiences .card {
    padding: 1.8rem;
  }

  #experiences .card .buttons {
    flex-direction: column;
    left: 50%;
    right: auto;
    transform: translate(-50%, -50%);
  }

  #experiences .card .buttons a {
    width: 4rem;
    height: 4rem;
  }

  /*===== CONTACT ==================================*/

  #contact ul a {
    font-size: 1.1rem;
  }

  #contact svg {
    // width: 1.8rem;
    // height: 1.8rem;
  }

  #contact .col-b img {
    // width: 9rem;
  }

  #contact .col-b::after {
    // width: 9rem;
    // height: 2rem;
  }
}

  
`;
