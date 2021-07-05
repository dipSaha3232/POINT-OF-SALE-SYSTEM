using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Model;
using WebApplication1.Repository;
namespace WebApplication1.Controllers
{
    public class SaleController : Controller
    {
        private SaleRepository _saleRepository = new SaleRepository();

        [HttpPost("api/staff/sale/purchase")]
        public IActionResult Add([FromBody] Sale sale)
        {
            var addedSale = _saleRepository.Add(sale);
            return Ok(addedSale);
        }

        [HttpGet("api/sale/report")]
        public IActionResult GetAll()
        {
            var allSales = _saleRepository.GetAll();
            return Ok(allSales);
        }

        [HttpGet("api/sale/search")]
        public IActionResult Search([FromQuery] string pid)
        {
            var sale = _saleRepository.Search(pid);
            return Ok(sale);
        }
    }
}
