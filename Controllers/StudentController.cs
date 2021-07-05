using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Model;
using WebApplication1.Repository;

namespace WebApplication1.Controllers
{
    public class StudentController : Controller
    {
        private StudentRepository _studentRepository = new StudentRepository();

        [HttpPost("api/student/add")]
        public IActionResult Add([FromBody] Student student)
        {
            var addedStudent = _studentRepository.Add(student);
            return Ok(addedStudent);
        }

        [HttpGet("api/student/getStudentById")]
        public IActionResult GetStudent(int id)
        {
            var student = _studentRepository.GetById(id);

            return Ok(student);
        }

        [HttpGet("api/student/getAll")]
        public IActionResult getAllStudent()
        {
            var allStudent = _studentRepository.GetAll();
            return Ok(allStudent);
        }

        [HttpPost("api/student/update")]
        public IActionResult Update(Student student)
        {
            var updateStudent = _studentRepository.UpdateStudent(student);
            return Ok(updateStudent);
        }

        [HttpGet("api/student/delete")]
        public IActionResult Delete(int id)
        {
            var student = _studentRepository.GetById(id);
            _studentRepository.Delete(student);
            return Ok();
        }
    }
}
