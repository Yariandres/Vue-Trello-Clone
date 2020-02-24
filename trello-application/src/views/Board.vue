<template>
  <div class="board flex flex-wrap">
    <div class="flex flex-wrap items-start mb-4">
      <BoardColumn
        v-for="(column, $columnIndex) of board.columns"
        :key="$columnIndex"
        :column="column"
        :columnIndex="$columnIndex"
        :board="board"
      />
      <div class="column flex">
        <input
          type="text"
          class="p-2 mr-2 flex-grow"
          placeholder="New Column Name"
          v-model="newColumnName"
          @keyup.enter="createColumn"
        />
      </div>
    </div>
    <div class="task-bg" v-if="isTaskOpen" @click.self="close">
      <router-view />
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import BoardColumn from "@/components/BoardColumn";
export default {
  components: { BoardColumn },
  data() {
    return {
      newColumnName: ""
    };
  },
  computed: {
    ...mapState(["board"]),
    isTaskOpen() {
      return this.$route.name === "task";
    }
  },
  methods: {
    close() {
      this.$router.push({ name: "board" });
    },
    createColumn() {
      this.$store.commit("CREATE_COLUMN", {
        name: this.newColumnName
      });
      this.newColumnName = "";
    }
  }
};
</script>
    <style lang="css">
.board {
  @apply p-4 h-full overflow-auto;
  background: #53c4d1;
}
.task-bg {
  @apply pin absolute;
  background: #53c4d1;
}
</style>
