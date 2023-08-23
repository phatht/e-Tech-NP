﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SER.Domain.Entities;

public class Product
{
    [Key]
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    [Column(TypeName = "decimal(18,2)")]
    public decimal Price { get; set; }
    public Guid? ShopId { get; set; }
    public Shop? Shop { get; set; }
    public ICollection<Customer> Customers { get; set; } = new List<Customer>();

}
