import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular14-Practice';

  // List 1: Fruits
  one: string = "Fruits List"
  fruits: Array<string> = ['Apple', 'Banana', 'Mango', 'Orange', 'Grapes'];

  // List 2: Vegetables
  two: string = "Vegetables List"
  vegetables: string[] = ['Potato', 'Tomato', 'Onion', 'Carrot', 'Cabbage'];

  // List 3: Programming Languages
  three: string = "Programming Languages";
  languages = ['JavaScript', 'TypeScript', 'Java', 'Python', 'C++'];

  // List 4: Frontend Technologies
  four: string = "Frontend Technologies"
  frontend: Array<string> = ['HTML', 'CSS', 'JavaScript', 'Angular', 'React'];

  // List 5
  five: string = "Backend";
  backend: string[] = ['I like Node.js', 'I like Express.js', 'I like PHP'];

  // List 6: Database
  six: string = "Databases"
  databases: Array<string> = ['MongoDB', 'MySQL', 'PostgreSQL', 'Oracle', 'Firebase'];

  // List 7: Cities
  seven: string = "Cities"
  cities: string[] = ['Pune', 'Mumbai', 'Solapur', 'Delhi', 'Bangalore'];

  // List 8: Countries
  eight: string = "Countries"
  countries: string[] = ['India', 'USA', 'UK', 'Japan', 'Germany'];

  // List 9: Animals
  nine: string = "animal";
  animals: Array<string> = ['Tiger', 'Lion', 'Elephant', 'Horse', 'Dog'];

  // List 10: Colors
  ten: string = "color";
  colors: string[] = ['Red', 'Blue', 'Green', 'Yellow', 'Black'];

  // List 11: Mobile Brands
  eleven: string = "Mobile Brands"
  mobileBrands: Array<string> = ['Samsung', 'Apple', 'OnePlus', 'Vivo', 'Oppo'];

  // List 12: Sports
  twelve: string = "Sports";
  sports: Array<string> = ['Cricket', 'Football', 'Hockey', 'Tennis', 'Badminton'];

  // List 13: Subjects
  thirteen: string = "Subjects";
  subjects: Array<string> = ['English', 'Mathematics', 'Science', 'History', 'Geography'];

  // List 14: Electronic Products
  fourteen: string = "Electronics";
  electronics: Array<string> = ['Laptop', 'Mobile', 'Tablet', 'Monitor', 'Keyboard'];

  // List 15: Cars
  fifteen: string = "Cars";
  cars: Array<string> = ['BMW', 'Audi', 'Toyota', 'Honda', 'Mercedes'];

  // List 16: Music Instruments
  sixteen: string = "Instruments";
  instruments: Array<string> = ['Tabla', 'Guitar', 'Piano', 'Drums', 'Flute'];

  // List 17: Days
  seventeen: string = "Days";
  days: Array<string> = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  // List 18: Months
  eighteen: string = "Months";
  months: Array<string> = ['January', 'February', 'March', 'April', 'May'];

  // List 19: Web Browsers
  nineteen: string = "Browser";
  browsers: Array<string> = ['Chrome', 'Firefox', 'Edge', 'Safari', 'Opera'];

  // List 20: Angular Concepts
  twenty: string = "Angular Concepts"
  angularConcepts: string[] = ['Component', 'Module', 'Service', 'Pipe', 'Directive'];

}
