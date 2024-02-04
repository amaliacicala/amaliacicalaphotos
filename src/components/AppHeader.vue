<script setup lang="ts"></script>

<template>
  <v-app-bar elevation="0" color="primary">
    <v-container class="d-flex justify-space-between align-center">
      <h4 class="font-weight-bold text-uppercase">Amalia Cicala Photography</h4>

      <div class="d-flex">
        <v-list-item link title="Home" />

        <v-menu>
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props"> Photo Albums </v-list-item>
          </template>

          <v-list>
            <v-list-item link title="Item1" />
            <v-list-item link title="Item2" />
            <v-list-item link title="Item3" />
          </v-list>
        </v-menu>

        <v-list-item link title="Contacts"></v-list-item>
      </div>
    </v-container>
  </v-app-bar>
</template>
