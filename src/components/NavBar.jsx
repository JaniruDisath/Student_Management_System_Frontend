import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export default function NavBar() {
  return (
    <Navbar fluid rounded className="py-5 px-6 text-lg">
      <NavbarBrand as={Link} to="/">
        <span className="self-center whitespace-nowrap text-2xl font-bold dark:text-white">
          Flowbite React
        </span>
      </NavbarBrand>

      <div className="flex md:order-2">
        <NavbarToggle />
      </div>

      <NavbarCollapse>

        <NavbarLink
          as={Link}
          to="/"
          className="text-lg font-medium hover:text-blue-600"
        >
          View Student
        </NavbarLink>

        <NavbarLink
          as={Link}
          to="/viewall"
          className="text-lg font-medium hover:text-blue-600"
        >
          View All
        </NavbarLink>

       
      </NavbarCollapse>
    </Navbar>
  );
}
