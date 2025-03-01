import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import TasksPage from '../components/TasksPage.vue';
import AddTaskPage from '../components/AddTaskPage.vue';

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/tasks',
    component: TasksPage,
  },
  {
    path: '/add-task',
    component: AddTaskPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;