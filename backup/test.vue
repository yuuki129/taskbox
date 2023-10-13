
<template>
  <div class="list-items">
    TEST
    <div v-if="loading">loading
      <div v-for="n in 6" :key="n" class="loading-item">
        <span class="glow-checkbox" />
        <span class="glow-text"> <span>Loading</span> <span>cool</span> <span>state</span> </span>
      </div>
    </div>

    <div v-else-if="isEmpty" class="list-items">isEmpty
      <div class="wrapper-message">
        <span class="icon-check" />
        <p class="title-message">You have no tasks</p>
        <p class="subtitle-message">Sit back and relax</p>
      </div>
    </div>

    <div v-else>else
      <Task
        v-for="task in tasksInOrder"
        :key="task.id"
        :task="task"
        @archive-task="onArchiveTask"
        @pin-task="onPinTask"
      />
    </div>
    {{ tasksInOrder }}
  </div>
</template>

<script>
import Task from '../src/components/Task.vue'

import { computed } from 'vue'

import { useTaskStore } from '../src/store'

export default {
  components: { Task },
  name: 'tesTest',
  setup() {
    //👇 Creates a store instance
    const store = useTaskStore()

    //👇 Retrieves the tasks from the store's state auxiliary getter function
    const tasks = computed(() => store.getFilteredTasks())

    //👇 Dispatches the actions back to the store
    const archiveTask = (task) => store.archiveTask(task)
    const pinTask = (task) => store.pinTask(task)

    return {
      isEmpty: false,
      tasksInOrder: tasks,
      // isEmpty: computed(() => tasks.value.length === 0),

      archiveTask,
      pinTask
    }
  }
}
</script>
