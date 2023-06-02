<template>
  <div class="about">
    <h1 class="abouttext">This is a todo app, pretty self explanatory.</h1>
  </div>
</template>

<style>
.abouttext {
    font-size: 16px;
    margin: 16px;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--grey);
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
