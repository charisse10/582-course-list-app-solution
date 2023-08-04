import { shallowMount } from "@vue/test-utils";
import CourseItem from "@/components/CourseItem.vue";

describe("CourseItem.vue", () => {
    it("check if course renders the props", () => {
        const course = {
            id: 0,
            name: "Course Name",
            credits: 0,
            hours: 0,
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis accusantium modi adipisci rem architecto sequi atque mollitia voluptates magnam assumenda at reiciendis aliquid, iusto ab debitis quibusdam molestiae quas commodi?",
            location: "online",
            enrollment: 0,
        }
        const wrapper = shallowMount(CourseItem, {
            props: { course },
        });
        expect(wrapper.find('h2').text()).toBe('Course Name');
    });

    





});
