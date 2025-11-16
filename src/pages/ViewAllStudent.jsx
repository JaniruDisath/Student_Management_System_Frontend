import { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";

export default function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    loadStudents();
  }, []);

  async function loadStudents() {
    try {
      const response = await axios.get("http://localhost:8081/student/all");
      setStudents(response.data);
      console.log("Students:", response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  }

  return (
    <div className="w-full flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <div className="w-full max-w-7xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-10">
        
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Student List
        </h2>

        <div className="overflow-x-auto">
          <Table>
            <TableHead>
              <TableRow>
                <TableHeadCell>ID</TableHeadCell>
                <TableHeadCell>Full Name</TableHeadCell>
                <TableHeadCell>Grade</TableHeadCell>
                <TableHeadCell>Year</TableHeadCell>
                <TableHeadCell>Entered Year</TableHeadCell>
                <TableHeadCell>DOB</TableHeadCell>
                <TableHeadCell>Stream</TableHeadCell>
                <TableHeadCell>Class</TableHeadCell>
                <TableHeadCell>Medium</TableHeadCell>
                <TableHeadCell>Email</TableHeadCell>
                <TableHeadCell>Phone</TableHeadCell>
                <TableHeadCell>Address</TableHeadCell>
                <TableHeadCell>Edit</TableHeadCell>
              </TableRow>
            </TableHead>

            <TableBody className="divide-y">
              {students.map((s) => (
                <TableRow key={s.studentId} className="bg-white dark:bg-gray-700">
                  <TableCell>{s.studentId}</TableCell>
                  <TableCell className="font-medium text-gray-900 dark:text-white">
                    {s.fullName}
                  </TableCell>
                  <TableCell>{s.grade}</TableCell>
                  <TableCell>{s.year}</TableCell>
                  <TableCell>{s.enteredYear}</TableCell>
                  <TableCell>{s.dob}</TableCell>
                  <TableCell>{s.stream}</TableCell>
                  <TableCell>{s.studentClass}</TableCell>
                  <TableCell>{s.medium}</TableCell>
                  <TableCell>{s.email}</TableCell>
                  <TableCell>{s.phone}</TableCell>
                  <TableCell>{s.address}</TableCell>

                  <TableCell>
                    <a
                      href={`/student/edit/${s.studentId}`}
                      className="font-medium text-blue-600 hover:underline dark:text-blue-400"
                    >
                      Edit
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

      </div>
    </div>
  );
}
