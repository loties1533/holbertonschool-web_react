interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: unknown;
}

const test1: Teacher = {
  firstName: 'max',
  fullTimeEmployee: false,
  lastName: 'ptr',
  location: 'paris',
  contract: false,
};

console.log(test1);

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'elon',
  lastName: 'musk',
  location: 'san diego',
  fullTimeEmployee: true,
  numberOfReports: 7,
};

console.log(director1);

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher('max', 'ptr'));

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

interface StudentClassConstructor {
  new(firstName: string, lastName: string): StudentClassInterface;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

const MyStudent: StudentClassConstructor = StudentClass;
const student = new MyStudent('nicolas', 'loties');

console.log(student.displayName());