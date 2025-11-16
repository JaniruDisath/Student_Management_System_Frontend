import { useState } from "react";
import { Datepicker, Label, TextInput, Button } from "flowbite-react";
import axios from "axios";

function AddStudent() {
  const [studentId, setStudentId] = useState(""); 

  // Student form
  const [form, setForm] = useState({
    fullName: "",
    grade: "",
    year: "",
    dob: "",
    joinedDate: "",
    stream: "",
    studentClass: "",
    medium: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleInput = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  
  const handleSearch = async () => {
    if (!studentId) return alert("Please enter student ID");

    try {
      const response = await axios.get(`http://localhost:8081/student/${studentId}`);
      const data = response.data;


      setForm({
        fullName: data.fullName,
        grade: data.grade,
        year: data.year,
        dob: data.dob,
        joinedDate: data.joinedDate,
        stream: data.stream,
        studentClass: data.studentClass,
        medium: data.medium,
        email: data.email,
        phone: data.phone,
        address: data.address,
      });

      console.log("Fetched:", data);
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Student not found");
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:8081/student/add", form);
      console.log("Created:", response.data);
      alert("Student added successfully!");
    } catch (error) {
      console.error("Create error:", error);
    }
  };


  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8081/student/update/${studentId}`,
        form
      );
      console.log("Updated:", response.data);
      alert("Student updated successfully!");
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this student?")) return;

    try {
      await axios.delete(`http://localhost:8081/student/delete/${studentId}`);
      alert("Student deleted successfully!");

      setForm({
        fullName: "",
        grade: "",
        year: "",
        dob: "",
        joinedDate: "",
        stream: "",
        studentClass: "",
        medium: "",
        email: "",
        phone: "",
        address: "",
      });
      setStudentId("");
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  return (
    <div className="w-full flex justify-center mt-10">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md space-y-6">

        {/* SEARCH STUDENT */}
        <div>
          <Label className="text-lg" value="Search Student by ID" />
          <div className="flex gap-3 mt-2">
            <TextInput
              type="number"
              sizing="lg"
              placeholder="Enter Student ID"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
            />
            <Button color="purple" onClick={handleSearch}>
              Search
            </Button>
          </div>
        </div>

        <hr className="my-4" />

        {/* FORM */}
        <Field label="Full Name" value={form.fullName} onChange={(v) => handleInput("fullName", v)} />
        <Field label="Grade" type="number" value={form.grade} onChange={(v) => handleInput("grade", v)} />
        <Field label="Year" type="number" value={form.year} onChange={(v) => handleInput("year", v)} />

        {/* DOB */}
        <div>
          <Label className="text-lg" value="Date of Birth" />
          <Datepicker
            defaultDate={form.dob ? new Date(form.dob) : null}
            onSelectedDateChanged={(date) => handleInput("dob", date.toISOString())}
          />
        </div>

        {/* JOINED DATE */}
        <div>
          <Label className="text-lg" value="Joined Date" />
          <Datepicker
            defaultDate={form.joinedDate ? new Date(form.joinedDate) : null}
            onSelectedDateChanged={(date) => handleInput("joinedDate", date.toISOString())}
          />
        </div>

        <Field label="Subject Stream" value={form.stream} onChange={(v) => handleInput("stream", v)} />
        <Field label="Student Class" value={form.studentClass} onChange={(v) => handleInput("studentClass", v)} />
        <Field label="Medium" value={form.medium} onChange={(v) => handleInput("medium", v)} />
        <Field label="Email" value={form.email} onChange={(v) => handleInput("email", v)} />
        <Field label="Phone" value={form.phone} onChange={(v) => handleInput("phone", v)} />
        <Field label="Address" value={form.address} onChange={(v) => handleInput("address", v)} />

        {/* BUTTONS */}
        <div className="flex flex-col gap-3">
          <Button color="blue" size="lg" onClick={handleSubmit}>
            Add Student
          </Button>

          <Button color="yellow" size="lg" onClick={handleUpdate}>
            Update Student
          </Button>

          <Button color="failure" size="lg" onClick={handleDelete}>
            Delete Student
          </Button>
        </div>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, type = "text" }) {
  return (
    <div>
      <Label className="text-lg" value={label} />
      <TextInput
        type={type}
        sizing="lg"
        className="mt-1"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default AddStudent;
