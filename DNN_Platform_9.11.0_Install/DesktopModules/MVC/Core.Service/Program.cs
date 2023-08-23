using AutoMapper;
using Microsoft.EntityFrameworkCore;
using SER.DataAccess;
using SER.Domain;
using SER.MapperProfiles;

var builder = WebApplication.CreateBuilder(args);


var corsPolicy = "_corsPolicy";
builder.Services.AddCors(options =>
{
    options.AddPolicy(corsPolicy,
             builder =>
             builder.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader()

                 );
});

// Add services to the container.
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<ApplicationDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("FirstConnection"));
});

//Auto mapper config
var config = new MapperConfiguration(cfg =>
{
    cfg.AllowNullCollections = true;
    cfg.AddProfile(new MappingProfile());
    //cfg.AddProfile<MappingProfile>();
});

var mapper = config.CreateMapper();
builder.Services.AddSingleton(mapper);

builder.Services.AddScoped(typeof(IUnitOfWork), typeof(UnitOfWork));
builder.Services.AddScoped(typeof(ISeedService), typeof(SeedService));
var app = builder.Build();

app.UseCors(corsPolicy);

// Configure the HTTP request pipeline.
//if (app.Environment.IsDevelopment())
//{
    app.UseSwagger();
    app.UseSwaggerUI();
//}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
