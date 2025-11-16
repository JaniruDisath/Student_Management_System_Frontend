import { useState } from "react";
import axios from "axios";

import { Label, TextInput, Card, Button } from "flowbite-react";

export default function ViewStudent() {
  const [studentId, setStudentId] = useState("");
  const [student, setStudent] = useState(null);

  async function getUserById(id) {
    try {
      const response = await axios.get(`http://localhost:8081/student/${id}`);
      console.log("User:", response.data);
      return response.data;
    } catch (error) {
      console.error("Read error:", error);
      return null;
    }
  }

  const handleSearch = async () => {
    if (!studentId) {
      alert("Please enter a Student ID");
      return;
    }

    const data = await getUserById(studentId);

    if (data) {
      setStudent(data);
    } else {
      alert("Student not found!");
    }
  };

  async function deleteUser(id) {
  try {
    const response = await axios.delete(
      `http://localhost:8081/student/delete/${id}`
    );

    console.log("Deleted:", response.data);
  } catch (error) {
    console.error("Delete error:", error);
  }
}

  return (
    <>
      <div className="w-full flex justify-center mt-10">
        <div className="flex max-w-md w-full flex-col gap-4">
          <div>
            <Label htmlFor="studentId" className="text-xl text-white">
              Enter Student ID
            </Label>

            <TextInput
              id="studentId"
              type="number"
              sizing="lg"
              placeholder="e.g. 1024"
              className="mt-1"
              onChange={(e) => setStudentId(e.target.value)}
            />
          </div>

          <div onClick={handleSearch}>
            <div className="flex flex-wrap gap-2">
              <Button color="alternative" pill>
                Get Data
              </Button>
            </div>
          </div>
        </div>
      </div>

      {student && (
        <div className="w-full flex justify-center mt-10">
          <Card className="w-full max-w-xl bg-gray-800 text-white shadow-2xl p-6">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Student Information
            </h2>

            <div className="space-y-4 text-lg">
              <Info label="Full Name" value={student.fullName} />
              <Info label="Grade" value={student.grade} />
              <Info label="Year" value={student.year} />
              <Info label="Date of Birth" value={student.dob} />
              <Info label="Joined Date" value={student.joinedDate} />
              <Info label="Stream" value={student.stream} />
              <Info label="Class" value={student.studentClass} />
              <Info label="Medium" value={student.medium} />
              <Info label="Email" value={student.email} />
              <Info label="Phone" value={student.phone} />
              <Info label="Address" value={student.address} />
            </div>
          </Card>

          
        </div>
      )}

            <div onClick={deleteUser(student.id)}>
            <div className="flex flex-wrap gap-2">
              <Button color="red" pill>
                Delete Data
              </Button>
            </div>
          </div>
    </>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <span className="font-semibold text-white">{label}: </span>
      <span className="text-gray-300">{value}</span>
    </div>
  );
}
