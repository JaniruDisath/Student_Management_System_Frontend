import { useState } from "react";
import { Datepicker, Label, TextInput, Button } from "flowbite-react";
import axios from "axios";

function AddStudent() {
  // State for all form fields
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

  const handleSubmit = () => {
    console.log("Student Data:", form);
    createUser()
  };

  async function createUser() {
    try {
      const newUser = {form};

      const response = await axios.post(
        "http://localhost:8081/student/add",
        newUser
      );

      console.log("Created:", response.data);
    } catch (error) {
      console.error("Create error:", error);
    }
  }

  return (
    <div className="w-full flex justify-center mt-10">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md space-y-6">
        {/* FULL NAME */}
        <div>
          <Label htmlFor="fullName" className="text-lg" value="Full Name" />
          <TextInput
            id="fullName"
            type="text"
            sizing="lg"
            placeholder="Enter full name"
            className="mt-1"
            onChange={(e) => handleInput("fullName", e.target.value)}
          />
        </div>

        {/* GRADE */}
        <div>
          <Label htmlFor="grade" className="text-lg" value="Grade" />
          <TextInput
            id="grade"
            type="number"
            sizing="lg"
            placeholder="Enter grade"
            className="mt-1"
            onChange={(e) => handleInput("grade", e.target.value)}
          />
        </div>

        {/* YEAR */}
        <div>
          <Label htmlFor="year" className="text-lg" value="Year" />
          <TextInput
            id="year"
            type="number"
            sizing="lg"
            placeholder="Enter year"
            className="mt-1"
            onChange={(e) => handleInput("year", e.target.value)}
          />
        </div>

        {/* DATE OF BIRTH */}
        <div>
          <Label className="text-lg" value="Date of Birth" />
          <Datepicker
            onSelectedDateChanged={(date) =>
              handleInput("dob", date.toISOString())
            }
          />
        </div>

        {/* JOINED DATE */}
        <div>
          <Label className="text-lg" value="Joined Date" />
          <Datepicker
            onSelectedDateChanged={(date) =>
              handleInput("joinedDate", date.toISOString())
            }
          />
        </div>

        {/* STREAM */}
        <div>
          <Label className="text-lg" value="Subject Stream" />
          <TextInput
            type="text"
            sizing="lg"
            placeholder="Science / Commerce / Arts"
            onChange={(e) => handleInput("stream", e.target.value)}
          />
        </div>

        {/* CLASS */}
        <div>
          <Label className="text-lg" value="Student Class" />
          <TextInput
            type="text"
            sizing="lg"
            placeholder="Enter class"
            onChange={(e) => handleInput("studentClass", e.target.value)}
          />
        </div>

        {/* MEDIUM */}
        <div>
          <Label className="text-lg" value="Medium" />
          <TextInput
            type="text"
            sizing="lg"
            placeholder="English / Sinhala / Tamil"
            onChange={(e) => handleInput("medium", e.target.value)}
          />
        </div>

        {/* EMAIL */}
        <div>
          <Label htmlFor="email" className="text-lg" value="Email" />
          <TextInput
            id="email"
            type="email"
            placeholder="name@email.com"
            sizing="lg"
            shadow
            onChange={(e) => handleInput("email", e.target.value)}
          />
        </div>

        {/* PHONE */}
        <div>
          <Label htmlFor="phone" className="text-lg" value="Phone Number" />
          <TextInput
            id="phone"
            type="number"
            sizing="lg"
            placeholder="07XXXXXXXX"
            onChange={(e) => handleInput("phone", e.target.value)}
          />
        </div>

        {/* ADDRESS */}
        <div>
          <Label htmlFor="address" className="text-lg" value="Address" />
          <TextInput
            id="address"
            type="text"
            sizing="lg"
            placeholder="Enter address"
            onChange={(e) => handleInput("address", e.target.value)}
          />
        </div>

        {/* SUBMIT BUTTON */}
        <Button
          color="blue"
          size="lg"
          className="w-full"
          onClick={handleSubmit}
        >
          Add Student
        </Button>
      </div>
    </div>
  );
}

export default AddStudent;
