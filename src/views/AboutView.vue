<template>
  
  <el-button @click="dialogVisible = true">Open Dialog</el-button>

 
  <MyDialog
    v-model="dialogVisible"
    title="My Custom Dialog"
    width="30%"
    @confirm="onDialogConfirm"
    @cancel="onDialogCancel"
  >
    <p>This is the content of my custom dialog.</p>
  </MyDialog>


</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script setup lang="ts">
import { ref } from 'vue';
import MyDialog from './../components/MyDialog.vue'; // Adjust path as needed


const dialogVisible = ref(false);
const onDialogConfirm = () => {
  console.log('Dialog confirmed!');
  // Perform actions after confirmation
};

const onDialogCancel = () => {
  console.log('Dialog cancelled!');
  // Perform actions after cancellation
};

</script>

<style scoped>
/* Optional: Add custom styles for the dialog or its content */
.dialog-footer button:first-child {
  margin-right: 10px;
}
.el-dialog__title {
  color:red;
}
</style> 