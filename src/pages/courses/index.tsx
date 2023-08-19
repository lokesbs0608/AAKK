import CourseCard from "@/components/courseCard";
import React from "react";

const Courses = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-center">
        <div
          style={{ minWidth: "300px" }}
          className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-2 gap-4"
        >
          {[1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10].map((item) => {
            return <CourseCard key={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Courses;
