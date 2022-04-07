<template>
  <v-container>
    <div class="mt-10">
      <v-text-field
        label="Name"
        outlined
        dense
      />
      <v-text-field
        label="E-Mail"
        outlined
        dense
      />
      <v-textarea
        label="Your Feedbacks"
        outlined
        dense
      />
      <div class="text-right">
        <v-btn
            color="success darken-2"
        >
          <v-icon left>mdi-mail</v-icon>
          <span>Gönder</span>
        </v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'StarsView'
}
</script>

<style scoped>

</style>
