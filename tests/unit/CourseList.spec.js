import { shallowMount } from "@vue/test-utils";
import CourseList from "@/components/CourseList.vue";

describe("CourseItem.vue", () => {

  it("emits addCourse event when action is made in CourseItem", async () => {
    const wrapper = shallowMount(CourseList);
    await wrapper.vm.addCourse(5);
    expect(wrapper.emitted("addCourse")).toBeTruthy();
    expect(wrapper.emitted("addCourse")[0][0]).toBe(5);
  });


  it("emits removeCourse event when action is made in CourseItem", async () => {
    const wrapper = shallowMount(CourseList);
    await wrapper.vm.removeCourse(4);
    expect(wrapper.emitted("removeCourse")).toBeTruthy();
    expect(wrapper.emitted("removeCourse")[0][0]).toBe(4);
  });

});
