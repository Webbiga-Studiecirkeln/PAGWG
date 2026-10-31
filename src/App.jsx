import Navbar from "./components/navigation/Navbar.jsx";
import Card from "./components/CourseCard/Card.jsx";
import courseData from "./static/course_data.json";

function App() {
  return (
    <div>
      <Navbar />

      <main className="mt-24 mx-6 xl:mx-0">
        <section className="max-w-7xl mx-auto flex flex-col items-center">
          <h1 className="text-cyan-900 font-bold text-4xl lg:text-6xl">Webbprogrammering <span className="font-normal">120hp</span></h1>
          <p className="text-xl text-cyan-900">PAGWG HT26</p>
        </section>

        {Object.entries(courseData).map(([semesterName, courses], semesterIndex) => (
          <section
            className="mx-auto mt-24 max-w-7xl"
            key={semesterName}
          >
            <h2 className="text-2xl font-bold tracking-wide uppercase text-center">
              Termin {semesterIndex + 1}
              <span className="font-normal">: {semesterName.toUpperCase()}</span>
            </h2>

            <div className="my-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
              {courses.map((course) => (
                <Card data={course} key={course.badges[1]} />
              ))}
            </div>
          </section>
        ))}

      </main>
    </div>
  )
}

export default App
