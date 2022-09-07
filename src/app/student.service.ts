import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import student from 'entity/Student';


const Post_URL="http://localhost:8090/Student"
const Delete_URL= "http://localhost:8090/deleteStudent/"
// const Put_URL = "http://localhost:8090/updateStudent/"


@Injectable({
  providedIn: 'root'
})
export class StudentService {
 

  getStudents(){
    return this.http.get("http://localhost:8090/allstudent")
  }
createstudent(student:{
id: number;
firstName: string;
lastName: string;
studentClass: string;
subject: string;
dob: string;
})
{
  return this.http.post(Post_URL,student);
}

deletebyid( id:number){
 return this.http.delete( Delete_URL + id);
}
deleteAll(){
  return this.http.delete( Delete_URL);
}


  
  constructor(public http :HttpClient) { }
}


// updateStudent(id:number, student:{
//   id: number;
//   firstName: string;
//   lastName: string;
//   studentClass: string;
//   subject: string;
//   dob: string;
//   })
//   {
//     return this.http.post(Put_URL + id , student );
//   }

