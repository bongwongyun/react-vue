<template>
  <header id="header">
    <div className="header__port">
      <router-link to="/portfolio">portfolio</router-link>
    </div>
    <div className="header__logo">
      <router-link to="/">bond</router-link>
    </div>
    <div className="header__menu">
      <ul>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/refer">refer</router-link></li>
        <li><router-link to="/Youtube">Youtube</router-link></li>
        <li><router-link to="/movie">Movie</router-link></li>
        <li><router-link to="/contents">contents</router-link></li>
        <li><router-link to="/portfolio">Portfolio</router-link></li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss">
#header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  color: var(--dark);
  border-bottom: 1px solid var(--dark_border);
  background-color: var(--light);
  display: flex;
  align-items: center;
  font-family: "Rajdhani";
  z-index: 1000;
}
.header__port {
  flex: 1 1 30%;

  a {
    display: inline-block;
    padding: 0 0.6em;
    text-transform: capitalize;
    position: relative;
  }
}
.header__logo {
  flex: 1 1 30%;
  text-align: center;

  a {
    display: inline-block;
    font-size: 1.6rem;
    padding: 1rem;
  }
}
.header__menu {
  flex: 1 1 40%;
  text-align: right;

  li {
    display: inline;

    a {
      display: inline-block;
      padding: 1rem;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        background: var(--light);
        transform: scaleX(0);
        transition: all 0.3s ease;
      }
      &:hover::before {
        transform: scaleX(1);
      }
    }
  }
}
//light .ver
.light#header {
  background-color: var(--light_bg);
  border-color: 1px solid var(--light_border);

  a {
    color: var(--dark);
    &::before {
      background: var(--dark_bg);
    }
  }
}
//midia quary
@media (max-width: 1000px) {
  .header__menu,
  .header__port {
    display: none;
  }
}
@media (max-width: 600px) {
  #header {
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(40px);
  }
}
</style>
