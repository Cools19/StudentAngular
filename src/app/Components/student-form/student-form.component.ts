import { Component, OnInit } from '@angular/core';

import Student from 'entity/Student';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
 

  student:Student = new Student();
  students: Student[] = [];

  save(){
    const observable = this.studentService.createstudent(this.student);
    observable.subscribe(
      (response:any) => {
        console.log(response);
      },
      function(error){
        console.log(error);
        alert("Something went wrong")
      }
    )
  }

  deletebyid(index){
    const observable = this.studentService.deletebyid(index);
    observable.subscribe((response: any)=>{
      console.log(response);
      this.students.splice(index, 1);
    }) 

  }
  deleteAll(){
    const observable = this.studentService. deleteAll();
    observable.subscribe((response: any)=>{
      console.log(response);
    }) 

  }
  

  
  
  constructor(public studentService:StudentService) { }

  ngOnInit(): void {
    const promise = this.studentService.getStudents();
    promise.subscribe((response)=>{
      console.log(response);
      this.students = response as Student[];
    })
  }

     
}


// update(id:number){
  //   const observable = this.studentService.updateStudent(id , student);
  //   observable.subscribe(
  //     (response:any) => {
  //       console.log(response);
  //     },
  //     function(error){
  //       console.log(error);
  //       alert("Something went wrong")
  //     }
  //   )
  // }
