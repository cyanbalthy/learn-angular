import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-table',
  templateUrl: './learn-table.component.html',
  styleUrls: ['./learn-table.component.css']
})

export class LearnTableComponent {
  displayedColumns: string[] = ['id', 'birthDate', 'firstName', 'lastName', 'gender', 'hireDate'];
  dataSource = DATA;
  countData=100;
}

/*
export class LearnTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'birthDate', 'firstName', 'lastName', 'gender', 'hireDate'];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit(): void {
  }

}*/

const DATA = [
  {
    "id": 10001,
    "birthDate": "1953-09-01",
    "firstName": "Georgi",
    "lastName": "Facello",
    "gender": "M",
    "hireDate": "1986-06-25",
  },
  {
    "id": 10002,
    "birthDate": "1964-06-01",
    "firstName": "Bezalel",
    "lastName": "Simmel",
    "gender": "F",
    "hireDate": "1985-11-20",
  },
  {
    "id": 10003,
    "birthDate": "1959-12-02",
    "firstName": "Parto",
    "lastName": "Bamford",
    "gender": "M",
    "hireDate": "1986-08-27",
  },
  {
    "id": 10004,
    "birthDate": "1954-04-30",
    "firstName": "Chirstian",
    "lastName": "Koblick",
    "gender": "M",
    "hireDate": "1986-11-30",

  },
  {
    "id": 10005,
    "birthDate": "1955-01-20",
    "firstName": "Kyoichi",
    "lastName": "Maliniak",
    "gender": "M",
    "hireDate": "1989-09-11",

  }
];