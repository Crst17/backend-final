<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
body {
  --width: 90%;
  --bg-color: #212529;
  background: lightgray;
  border-right: solid var(--bg-color) 2px;
  border-left: solid var(--bg-color) 2px;
  margin: 0 auto;
  width: var(--width);
  padding-top: 70px;
}
</style>
