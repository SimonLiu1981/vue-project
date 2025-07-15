<template>
    <el-dialog
      v-model="dialogVisible"
      :title="title"
      :width="width"
      :before-close="handleClose"      
    >
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleCancel">Cancel</el-button>
          <el-button type="primary" @click="handleConfirm">Confirm</el-button>
        </span>
      </template>
    </el-dialog>
  </template>
  
  <script setup lang="ts">
  import { ref, watch } from 'vue';
  import { ElDialog, ElButton } from 'element-plus';
  
  const props = defineProps({
    modelValue: {
      type: Boolean,  
      default: false,
    },
    title: {
      type: String,
      default: 'Dialog Title',
    },
    width: {
      type: String,
      default: '50%',
    },
  });
  
  const emit = defineEmits(['update:modelValue', 'confirm', 'cancel']);
  
  const dialogVisible = ref(props.modelValue);
  
  watch(() => props.modelValue, (newVal) => {
    dialogVisible.value = newVal;
  });
  
  watch(dialogVisible, (newVal) => {
    emit('update:modelValue', newVal);
  });
  
  const handleClose = (done:any) => {
    emit('cancel');
    done();
  };
  
  const handleCancel = () => {
    dialogVisible.value = false;
    emit('cancel');
  };
  
  const handleConfirm = () => {
    dialogVisible.value = false;
    emit('confirm');
  };
  </script>
  
  <style scoped>
  .dialog-footer button:first-child {
    margin-right: 10px;
  }
  </style>