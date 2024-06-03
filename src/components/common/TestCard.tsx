const TestCard: React.FC = () => {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">Card Title</h2>
        <p className="text-gray-700 mb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis vitae nunc scelerisque varius.
        </p>
        <p className="text-gray-700 mb-2">
          Phasellus at turpis ut augue sollicitudin congue non nec lacus. Nulla facilisi.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Read More</button>
      </div>
    );
  };
  
  export default TestCard;
  