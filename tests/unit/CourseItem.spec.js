import { shallowMount } from "@vue/test-utils";
import CourseItem from "@/components/CourseItem.vue";

describe("CourseItem.vue", () => {

  it("renders the props: course", () => {
    const course = {
      id: 0,
      name: "Course Name",
      credits: 0,
      hours: 0,
      description: "Lorem ipsum dolor sit amet consectetur",
      location: "online",
      enrollment: 0,
    };
    const wrapper = shallowMount(CourseItem, {
      props: { course },
    });
    expect(wrapper.find("h2").text()).toBe("Course Name");
    expect(wrapper.find("p").text()).toBe(
      "Lorem ipsum dolor sit amet consectetur"
    );
  });


  it("displays Add Course button when it is not full and not added", () => {
    const buttonTxt = "Add Course";
    const wrapper = shallowMount(CourseItem);
    expect(wrapper.find("button").text()).toBe(buttonTxt);
  });


  it("displays Remove Course button when it is not full but added", async () => {
    const buttonTxt = "Remove Course";
    const wrapper = shallowMount(CourseItem);
    await wrapper.setData({ isAdded: true });
    expect(wrapper.find("button").text()).toBe(buttonTxt);
  });


  it ("emits addCourse event when Add Course button is clicked", async () => {
    const wrapper = shallowMount(CourseItem);
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted("addCourse")).toBeTruthy();
    expect(wrapper.emitted("addCourse")[0][0]).toBe(0);
  });


  it ("emits removeCourse event when Remove Course button is clicked", async () => {
    const wrapper = shallowMount(CourseItem);
    await wrapper.setData({ isAdded: true });
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted("removeCourse")).toBeTruthy();
    expect(wrapper.emitted("removeCourse")[0][0]).toBe(0);
  });


  it ("hides the button when not available or selected", async () => {
    const wrapper = shallowMount(CourseItem);
    await wrapper.setData({ isFull: true, isAdded: true });
    expect(wrapper.find("button").exists()).toBe(true);
  });


  it ("displays enrollmentStatus correctly when full", () => {
    const wrapper = shallowMount(CourseItem, {
      props: { course: { enrollment: 20 } },
      });
    expect(wrapper.find("[data-testid='eStatus']").text()).toBe("full");
  });

  it ("displays enrollmentStatus correctly when available to join", () => {
    const wrapper = shallowMount(CourseItem, {
      props: { course: { enrollment: 10 } },
      });
    expect(wrapper.find("[data-testid='eStatus']").text()).toBe("available to join");
  });

  it ("displays enrollmentStatus correctly when empty", () => {
    const wrapper = shallowMount(CourseItem, {
      props: { course: { enrollment: 0 } },
      });
    expect(wrapper.find("[data-testid='eStatus']").text()).toBe("empty");
  });

});

