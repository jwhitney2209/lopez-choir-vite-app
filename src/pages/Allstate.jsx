import SectionTitle from "../components/SectionTitle";

export default function Allstate() {
  return (
    <>
      <section className="bg-white">
        <SectionTitle title="All-State & UIL" />
        <div className="grid grid-cols-1 lg:space-x-4 lg:grid-cols-3 items-stretch text-center p-4 lg:space-y-0 space-y-6 md:mx-auto">
          <div className="bg-gray-900 hover:bg-yellow-500 hover:text-gray-900 p-6 space-y-2 text-gray-100">
            <h2 className="text-2xl text-left lg:text-center italic font-bold">
              Who is involved?
            </h2>
            <p className="text-left lg:text-justify">
              All LECHS Choir students{" "}
              <b>
                <i>highly encouraged</i>
              </b>{" "}
              to participate in the TMEA All-State Auditions and/or UIL Solo &
              Ensemble process. This includes students in the following choirs:
              <ol className="pl-10 list-disc">
                <li>
                  Freshman Treble Choir <b className="italic">(encouraged)</b>
                </li>
                <li>
                  Advanced Treble Choir <b className="italic">(encouraged)</b>
                </li>
                <li>
                  Advanced Tenor-Bass Choir{" "}
                  <b className="italic">(encouraged)</b>
                </li>
                <li>
                  Varsity Treble Choir <b className="italic">(required)</b>
                </li>
                <li>
                  Varsity Tenor-Bass Choir <b className="italic">(required)</b>
                </li>
                <li>
                  Chorale (Varsity Mixed Choir){" "}
                  <b className="italic">(required)</b>
                </li>
                <li>
                  UPBEAT! <b className="italic">(required)</b>
                </li>
              </ol>
            </p>
          </div>
          <div className="bg-gray-900 hover:bg-yellow-500 hover:text-gray-900 p-6 space-y-2 text-gray-100">
            <h2 className="text-2xl text-left lg:text-center italic font-bold">
              Why should <span className="underline">you</span> participate?
            </h2>
            <p className="text-left lg:text-justify">
              This process is a great way to improve student musicianship which
              helps grow student leaders in the choral program. When{" "}
              <b>
                <i>you</i>
              </b>{" "}
              grow the{" "}
              <b>
                <i>choir</i>
              </b>{" "}
              grows as a whole. Your participation will make a difference in
              your own singing journey and will ultimately result in an overall
              happier experience in the choir program.
            </p>
          </div>
          <div className="bg-gray-900 hover:bg-yellow-500 hover:text-gray-900 p-6 space-y-2 text-gray-100">
            <h2 className="text-2xl text-left lg:text-center italic font-bold">
              What is the outcome?
            </h2>
            <p className="text-left lg:text-justify">
              Not every student will make it to the All-State Choir or earn a
              superior rating at UIL Solo & Ensemble. However, the process of
              preparing for these auditions and contests will help students grow
              as musicians and leaders. All we are asking is that you give it a
              try.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 divide-x-2 lg:grid-cols-2 space-y-6 lg:space-y-0 items-start lg:mx-auto py-6">
          <div className="px-4 text-center">
            <h1 className="text-2xl text-left lg:text-center font-bold">
              TMEA All-State
            </h1>
            <p className="text-justify">
              <b>Texas All-State Choir auditions</b> are <i>rank-based</i>{" "}
              events (student vs. student) where all students learn a set of
              music and audition for judges. The audition is conducted in a{" "}
              <b className="italic">&quot;blind&quot;</b> mode where the student
              and judges cannot see each other.{" "}
            </p>
          </div>
          <div className="px-4 text-center">
            <h1 className="text-2xl text-left lg:text-center font-bold">
              UIL Solo & Ensemble
            </h1>
            <p className="text-justify">
              <b>UIL Solo & Ensemble</b> is a <i>rating-based</i> event (student
              vs. self) where a student will perform for a rating of Superior,
              Excellent, or Good in front of a judge.{" "}
              <b>
                This is not a rank-based competition, as in, there is no 1st,
                2nd, or 3rd place etc...{" "}
              </b>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
