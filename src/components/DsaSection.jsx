
const DsaSection = () => {
    // Sample data structures and algorithms
    const dataStructures = [
        'Array',  'Linked List',
        'Stack',
        'Queue',
        'Tree',
        'Graph',
        'Hash Table',
        // Add more data structures as needed
    ];

    const algorithms = [
        'Sorting Algorithms (e.g., Bubble Sort, Quick Sort, Merge Sort)',
        'Searching Algorithms (e.g., Linear Search, Binary Search)',
        'Graph Algorithms (e.g., Breadth-First Search, Depth-First Search)',
        'Dynamic Programming',
        'Greedy Algorithms',
        // Add more algorithms as needed
    ];

    return (
        <div className="  container mx-auto mt-10">
            <div className="flex justify-between">
                <div className="w-1/2 h-full mr-4 bg-black">
                    <div className=" p-6 rounded-lg shadow-md h-full text-white">
                        <h2 className="text-xl font-semibold mb-4">Data Structures</h2>
                        <ul>
                            {dataStructures.map((ds, index) => (
                                <li key={index} className="mb-2">{ds}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="w-1/2 h-full ml-4 bg-black">
                    <div className="p-6 rounded-lg shadow-md h-full text-white">
                        <h2 className="text-xl font-semibold mb-4">Algorithms</h2>
                        <ul>
                            {algorithms.map((algo, index) => (
                                <li key={index} className="mb-2">{algo}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            {/* <div className="mt-6 text-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    View LeetCode Profile
                </button>
            </div> */}
        </div>
    );
};

export default DsaSection;
