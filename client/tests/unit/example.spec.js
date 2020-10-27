import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App.vue", () => {
  it("renders henlo", () => {
    const wrapper = shallowMount(App, {});
    expect(wrapper.html()).toMatch("henlo");
  });
});
