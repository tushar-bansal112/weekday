import Select from "react-select";
import "./filter.css";
import React from "react";

export default function Filter() {
  const roleoptions = [
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" },
    { value: "fullstack", label: "Full Stack" },
    { value: "ios", label: "IOS" },
    { value: "flutter", label: "Flutter" },
    { value: "react", label: "React Native" },
    { value: "android", label: "Android" },
  ];
  const minbaseoptions = [
    { value: "0", label: "O$" },
    { value: "20", label: "20$" },
    { value: "40", label: "40$" },
    { value: "60", label: "60$" },
    { value: "80", label: "80$" },
    { value: "100", label: "100$" },
    { value: "200", label: "200$" },
    { value: "500", label: "500$" },
  ];
  const remoteoptions = [
    { value: "remote", label: "Remote" },
    { value: "hybrid", label: "Hybrid" },
    { value: "inoffice", label: "In-Office" },
  ];
  const minexpoptions = [
    { value: "0", label: "0 Years" },
    { value: "1", label: "1 Years" },
    { value: "2", label: "2 Years" },
    { value: "3", label: "3 Years" },
    { value: "4", label: "4 Years" },
    { value: "5", label: "5 Years" },
    { value: "6", label: "6 Years" },
    { value: "7", label: "7 Years" },
    { value: "8", label: "8 Years" },
    { value: "9", label: "9 Years" },
    { value: "10", label: "10 Years" },
  ];
  const locoptions = [
    { value: "delhi", label: "Delhi NCR" },
    { value: "mumbai", label: "Mumbai" },
    { value: "gurugram", label: "Gurugram" },
    { value: "bangalore", label: "Bangalore" },
    { value: "hyderabad", label: "Hyderabad" },
    { value: "pune", label: "Pune" },
    { value: "chennai", label: "Chennai" },
    { value: "kolkata", label: "Kolkata" },
  ];

  const techoptions = [
    { value: "c", label: "C" },
    { value: "c++", label: "C++" },
    { value: "java", label: "Java" },
    { value: "python", label: "Python" },
    { value: "javascript", label: "JavaScript" },
    { value: "reactjs", label: "Reactjs" },
    { value: "nodejs", label: "Nodejs" },
    { value: "flutter", label: "Flutter" },
  ];
  return (
    <div className="filter">
      <Select
        options={minexpoptions}
        className="select"
        placeholder="Min Experience"
        isSearchable
      />
      <input className="input" placeholder="Search Company Name" type="text" />
      <Select
        options={locoptions}
        className="select"
        placeholder="Location"
        isSearchable
      />
      <Select
        options={remoteoptions}
        className="select"
        placeholder="Remote/On-site"
        isSearchable
      />
      <Select
        options={techoptions}
        className="select"
        placeholder="Tech Stack"
        isSearchable
        isMulti
      />
      <Select
        options={roleoptions}
        className="select"
        placeholder="Role"
        isSearchable
      />

      <Select
        options={minbaseoptions}
        className="select"
        placeholder="Min Base Pay"
        isSearchable
      />
    </div>
  );
}
