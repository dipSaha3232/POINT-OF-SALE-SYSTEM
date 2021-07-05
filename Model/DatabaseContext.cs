using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;

namespace WebApplication1.Model
{
    public class DatabaseContext : DbContext
    {
        private const string ConnectionString = @"Server=LAPTOP-O9TJLM1R;Database=BSSE10thDB;Trusted_Connection=true";

        public DbSet<Student> Students { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<User> Users { get; set; }
        public  DbSet<Sale> Sales { get; set; }
        public DbSet<Service> Services { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(ConnectionString);
        }
    }
}
