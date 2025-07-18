
import { create } from 'zustand';
import { persist,devtools } from 'zustand/middleware';

const courseStore = (set) => ({
    courses: [],

    addCourse:(course) =>set((state) =>({
        courses:[course, ...state.courses]
})),
    removeCourse:(courseId) => set((state) =>({
        courses:state.courses.filter((course) => course.id != courseId)
    }))

}
)