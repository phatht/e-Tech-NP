﻿namespace SER.ViewModel.Product.Requests;

public class ProductCreateRequest
{
    public string Name { get; set; } = string.Empty;
    public decimal Price { get; set; }
}
