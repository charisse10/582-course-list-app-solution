<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <h1>Course List App</h1>

  <h2>Selected Courses: {{ coursesSelected }}</h2>

  <div v-for="course in coursesSelectedList" :key="course">
    {{ course != null ? courses[parseInt(course) - 1].name : "" }}
  </div>
  <CourseList
    :courses="courses"
    @addCourse="addCourse"
    @removeCourse="removeCourse"
  ></CourseList>

  <p>OUTSIDE DISPLAY: {{ inputText }}</p>
  <input type="text" v-model="inputText" />
  <FormComponent v-model="inputText"></FormComponent>

  <SampleModel v-for="item in items" :key="item" v-model="inputText"
    >SAMPLE</SampleModel
  >
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import CourseItem from "./components/CourseItem.vue";
import CourseList from "./components/CourseList.vue";
import FormComponent from "./components/FormComponent.vue";
import SampleModel from "./components/SampleModel.vue";

export default {
  name: "App",
  data() {
    return {
      coursesSelected: 0,
      coursesSelectedList: [],
      courses: [
        {
          name: "Vue.js",
          description: "The Progressive JavaScript Framework",
          hours: 50,
          credits: 3,
          location: "Online",
          instructor: "John Doe",
          id: 1,
          enrollment: 10,
        },
        {
          name: "React.js",
          description: "A JavaScript library for building user interfaces",
          hours: 50,
          credits: 3,
          location: "Online",
          instructor: "John Doe",
          id: 2,
          enrollment: 20,
        },
        {
          name: "Angular",
          description: "One framework. Mobile & desktop.",
          hours: 50,
          credits: 3,
          location: "Online",
          instructor: "John Doe",
          id: 3,
          enrollment: 12,
        },
        {
          name: "Node.js",
          description:
            "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
          hours: 50,
          credits: 3,
          location: "Online",
          instructor: "John Doe",
          id: 4,
          enrollment: 2,
        },
        {
          name: "Express.js",
          description:
            "Fast, unopinionated, minimalist web framework for Node.js",
          hours: 50,
          credits: 3,
          location: "Online",
          instructor: "John Doe",
          id: 5,
          enrollment: 5,
        },
        {
          name: "MongoDB",
          description: "The database for modern applications",
          hours: 50,
          credits: 3,
          location: "Online",
          instructor: "John Doe",
          id: 6,
          enrollment: 10,
        },
        {
          name: "Python",
          description:
            "Python is a programming language that lets you work quickly and integrate systems more effectively.",
          hours: 50,
          credits: 3,
          location: "Online",
          instructor: "John Doe",
          id: 7,
          enrollment: 20,
        },
      ],
      inputText: "",
      items: ["a", "b", "c"],
    };
  },
  components: {
    // HelloWorld,
    // CourseItem,
    CourseList,
    FormComponent,
    SampleModel,
  },

  methods: {
    addCourse(id) {
      this.coursesSelected++;
      this.coursesSelectedList[id] = id;
      console.log(2, "course added!");
    },
    removeCourse(id) {
      this.coursesSelected--;
      this.coursesSelectedList[id] = null;
      console.log(2, "course removed!");
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
