<template>
  <div class="footer">
    <p class="text-footer">© 2020 Paulo Frare | Todos os diretos reservados</p>
  </div>
</template>

<script>
export default {};
</script>

<style>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  color: rgb(233, 233, 233);
  background-color: rgb(39, 39, 39);
  position: fixed;
  bottom: 0;
}

.text-footer {
  margin-top: 15px;
  text-align: center;
}
</style>