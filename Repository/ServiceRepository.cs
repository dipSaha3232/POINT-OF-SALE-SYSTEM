﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Model;

namespace WebApplication1.Repository
{
    public class ServiceRepository : DatabaseRepository
    {
        public bool IsFound(string pid)
        {
            foreach (var service in DatabaseContext.Services)
            {
                if (service.pid == pid)
                    return true;
            }

            return false;
        }
        public bool Add(Service service)
        {
            if (IsFound(service.pid))
                return false;

            DatabaseContext.Services.Add(service);
            DatabaseContext.SaveChanges();
            return true;
        }

        public bool Update(Service service)
        {
            DatabaseContext.Services.Update(service);
            DatabaseContext.SaveChanges();
            return true;
        }

        public Service Search(string pid)
        {
            foreach(var service in DatabaseContext.Services)
            {
                if (service.pid == pid)
                    return service;
            }

            return null;
        }

        public List<Service> GetAll()
        {
            Console.WriteLine("hit korse");
            return DatabaseContext.Services.ToList();
        }
    }
}