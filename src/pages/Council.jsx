import SectionTitle from "../components/SectionTitle"
export default function Council() {
  return (
    <>
    <div className="bg-white">
      <SectionTitle title="Choir Council & Section Leaders" />
      <div className="grid grid-cols-1 lg:space-x-4 lg:grid-cols-3 items-stretch text-center p-4 lg:space-y-0 space-y-6 md:mx-auto">
        <div className="bg-gray-900 hover:bg-yellow-500 hover:text-gray-900 p-6 space-y-2 text-gray-100">
          <h1 className="text-2xl text-left lg:text-center italic font-bold">Choir Council</h1>
          <p className="py-4 text-justify">
            The Choir Council is a group of students who are selected by their
            directors & peers to represent the choir program. They are responsible for
            planning and organizing choir events, fundraisers, and activities.
            They also serve as liaisons between the choir director and the
            students. The Choir Council is comprised of the following positions:
            <ol className="pl-10 pt-2 list-disc text-left">
              <li>President - Erasmo Martinez</li>
              <li>Vice President - Christian Quintero</li>
              <li>Secretary - Luis Nava</li>
              <li>Treasurer - Malenie Ruiz</li>
              <li>Historians: Maricruz Gutierrez, Rodrigo Lopez, Katharine Martinez, Lexie Ortiz, Alyssa Gutierrez</li>
            </ol>
          </p>
        </div>
        <div className="bg-gray-900 hover:bg-yellow-500 hover:text-gray-900 p-6 space-y-2 text-gray-100">
          <h1 className="text-2xl text-left lg:text-center italic font-bold">Section Leaders</h1>
        </div>
        <div className="bg-gray-900 hover:bg-yellow-500 hover:text-gray-900 p-6 space-y-2 text-gray-100">
          <h1 className="text-2xl text-left lg:text-center italic font-bold">Meeting Information</h1>
        </div>
      </div>

    </div>
    </>
  )
}
