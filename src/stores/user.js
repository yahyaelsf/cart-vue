import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const user = ref(0);
  const cart = ref(0);
  function setUser(item) {
    user.value = item;
  }
  function setCart(item) {
    cart.value = item;
  }

  return { user, setUser , setCart };
});
