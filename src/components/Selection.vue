<template>
  <div class="container mb-5">
    <table class="table" width="100%">
      <tr>
        <td width="25%" class="text-center">
          <h3>Class</h3>
        </td>
        <td width="75%" class="text-center">
          <h3>Content</h3>
        </td>
      </tr>
      <tr>
        <td>
          <h4 class="text-danger">user-select-all</h4>
        </td>
        <td>
          <h6 class="user-select-all">
            This paragraph will be entirely selected when clicked by the user.
          </h6>
        </td>
      </tr>
      <tr>
        <td>
             <h4 class="text-primary">user-select-auto</h4>
        </td>
        <td>
          <h6 class="user-select-auto">
            This paragraph has default select behavior.
          </h6>
        </td>
      </tr>
      <tr>
        <td>
             <h4 class="text-info">user-select-none</h4>
        </td>
        <td>
          <h6 class="user-select-none">
            This paragraph will not be selectable when clicked by the user.
          </h6>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
