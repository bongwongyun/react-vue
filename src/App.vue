<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/refer">refer</router-link> |
    <router-link to="/youtube">youtube</router-link> |
    <router-link to="/movie">movie</router-link> |
    <router-link to="/contents">contents</router-link> |
    <router-link to="/portfolio">portfolio</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
@import "style.scss";
</style>
