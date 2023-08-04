<template>
  <p>INSIDE DISPLAY: {{ modelValue }}</p>
  <!-- <p>{{ name }}</p> -->
  <form action="">
    <label for="firstName">Name</label>
    <input
      type="text"
      name="firstName"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      placeholder="Type name here"
    />
  </form>
</template>

<script>
export default {
  name: "FormComponent",
  props: ["modelValue"],
  data() {
    return {
      name: "",
    };
  },
};
</script>

<style scoped lang="scss"></style>
