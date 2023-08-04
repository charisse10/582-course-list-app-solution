import { shallowMount } from "@vue/test-utils";
import CourseItem from "@/components/CourseItem.vue";

describe("CourseItem.vue", () => {
  it("check if course renders the props", () => {
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

  it("shows Add Course button when it is not full and not added", () => {
    const buttonTxt = "Add Course";
    const wrapper = shallowMount(CourseItem);
    expect(wrapper.find("button").text()).toBe(buttonTxt);
  });

  // it("emits an remove course event when the Remove Course button is clicked", () => {

  // });
  // it("displays the add button if available and it was not selected", () => {

  // });

  // it("displays the remove button if available and it was selected", () => {

  // });
});
