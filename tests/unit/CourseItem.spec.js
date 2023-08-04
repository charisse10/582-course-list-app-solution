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
        expect(wrapper.find('h2').text()).toBe('Course Name');
        expect(wrapper.find("p").text()).toBe('Lorem ipsum dolor sit amet consectetur'
        );
    });

    it("check if the Add Course button is available if it's not full and not added", async() => {
        const addBtn = "Add Course";
        const wrapper = shallowMount(CourseItem);
        expect(wrapper.find("button").text()).toBe(addBtn);
        await (wrapper.setData({ isFull: false, isAdded: false }));
        expect(wrapper.find("button").exists()).toBe(true);
    });




});
