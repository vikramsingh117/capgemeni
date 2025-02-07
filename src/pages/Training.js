import { useState } from "react";

const Training = () => {
  const [trainings, setTrainings] = useState([
    { title: "Product Knowledge", completed: false },
    { title: "Customer Service", completed: true },
    { title: "Compliance & Regulations", completed: false },
  ]);

  const toggleCompletion = (index) => {
    const updatedTrainings = [...trainings];
    updatedTrainings[index].completed = !updatedTrainings[index].completed;
    setTrainings(updatedTrainings);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Training</h2>
      <ul>
        {trainings.map((training, index) => (
          <li key={index} className="border p-2 my-2 bg-gray-100 rounded flex justify-between">
            {training.title}
            <button className="bg-blue-600 text-white px-4 py-1 rounded" onClick={() => toggleCompletion(index)}>
              {training.completed ? "Mark Incomplete" : "Mark Complete"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Training;
