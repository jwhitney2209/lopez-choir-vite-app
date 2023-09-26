import PropTypes from "prop-types";


SectionTitle.propTypes = {
  title: PropTypes.string,
};
export default function SectionTitle(props) {
  const { title } = props;
  return (
    <div className="text-center flex flex-col justify-center">
      <div className="border-b-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 py-4 sm:py-6">
          {title}
        </h1>
      </div>
    </div>
  );
}


