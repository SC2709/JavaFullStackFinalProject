# Employee CRUD Project

The Employee CRUD Project is used to manage employee details and it performs CRUD operation lile Add Employee, Update Employee, View Employee, Delete Employee.

It includes technology stack :

1) For Backend :
   
   • Spring Tool Suit :
     I have used Spring.io,  PGADMIN (PostgreSQL) and Spring Tool Suit as a backend.
   
     I have created a basic project of   Employee CRUD on Spring.io,

     and then after creating project I opened it in Spring Tool Suit,

     then created many different packages :
   
                        • com.example.demo : Class : EmpBackendApplication
                        • com.example.demo.adminController : Class : adminController
                        • com.example.demo.adminModel : Class : adminModel
                        • com.example.demo.adminRepository : Class : adminRepository
                        • com.example.demo.controller : Class : EmployeeController
                        • com.example.demo.exception : Class : ResourceNotFoundException
                        • com.example.demo.model : Class :  Employee.java
                        • com.example.demo.repository : Class : EmployeeRepository
                        • com.example.demo.webconfig : Class : webconfig
   
  • In PGADMIN (PostgreSQL) I have created employee database and also two tables admin and employee_table.
  
   • After creating packages and classes and connecting Spring Tool Suit and PGADMIN (PosstgreSQL) for database,
   
   • I updated the Project and Run as Spring Boot App.
   
   • Now Backend Run Successfully.
                        
2) For Frontend :
  • Angular (VSCODE) : For frontend I have used VSCODE for Angular :
                       In VSCODE I have Angular project named as employee-crud-frontend

                      • ng new employee-crud-frontend
                      • cd employee-crud-frontend
                      • npm install bootstrap
                      • ng generate component add-employee
                      • ng generate component admin-login
                      • ng generate component employee-list
                      • ng generate component home
                      • ng generate component show-details
                      • ng generate component update-employee
                      • ng generate service employee
   
   • And after doing all necessary procedures to create Frontend Project then I used this command to run Project :

                      • ng serve
   
   • Now Frontend Run Successfully.
  
   # Employee CRUD Project :
 
   ![image alt](https://github.com/SC2709/JavaFullStackFinalProject/blob/4b66e618802a1ce48b638ff3a0680d12ce8afa7c/Screenshots/Home%20Page.png)
   ![image alt](https://github.com/SC2709/JavaFullStackFinalProject/blob/4b66e618802a1ce48b638ff3a0680d12ce8afa7c/Screenshots/Employee%20List.png)
   ![image alt](https://github.com/SC2709/JavaFullStackFinalProject/blob/4b66e618802a1ce48b638ff3a0680d12ce8afa7c/Screenshots/Add%20Employee.png)
   ![image alt](https://github.com/SC2709/JavaFullStackFinalProject/blob/4b66e618802a1ce48b638ff3a0680d12ce8afa7c/Screenshots/Delete%20Employee.png)
   ![image alt](https://github.com/SC2709/JavaFullStackFinalProject/blob/4b66e618802a1ce48b638ff3a0680d12ce8afa7c/Screenshots/Admin%20Login.png)


                       
